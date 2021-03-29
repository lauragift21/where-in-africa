<template>
 <div class="relative my-8">
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
   <svg
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    class="w-6 h-6"
   >
    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
   </svg>
  </span>
  <input
   type="text"
   name="search"
   v-model="search"
   placeholder="Search for a Country..."
   class="pl-10 w-full md:w-2/3 lg:w-1/3 border-2 border-gray-100 py-2 shadow-md"
  />
 </div>
 <div class="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <span v-if="loading">loading...</span>
  <div v-for="country in searchList" :key="country.id" v-else>
   <countries-card :country="country" />
  </div>
 </div>
</template>

<script>
import CountriesCard from "@/components/CountriesCard";
import { reactive, toRefs, onMounted, computed, watchEffect } from "vue";

export default {
 components: { CountriesCard },
 setup() {
  const state = reactive({
   search: "",
   countries: [],
   loading: false,
  });

  const fetchCountries = async () => {
   await fetch("https://restcountries.eu/rest/v2/region/africa")
    .then((response) => response.json())
    .then((data) => {
     if (!state.loading) {
      state.countries = data;
     } else {
      state.loading = false;
     }
    })
    .catch((err) => {
     console.log(err);
     state.loading = false;
    });
  };

  onMounted(fetchCountries); // on mounted call 'fetchCountries'

  const searchList = computed(() => {
   return state.countries.filter((country) => {
    return country.name.toLowerCase().includes(state.search.toLowerCase());
   });
  });

  // watch(() => {
  //  console.log(
  //   "We have about " + state.countries.length + " Countries in Africa"
  //  );
  // });

  watchEffect(() => {
   console.log("We have about " + state.countries.length + " Countries in Africa");
  });

  return {
   ...toRefs(state),
   fetchCountries,
   searchList,
  };
 },
};
</script>

<style lang="scss" scoped>
</style>