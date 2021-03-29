<template>
 <div class="border-2 border-white h-full shadow-md rounded-lg">
  <img
   :src="country.flag"
   alt="country flag"
   class="object-cover h-40 w-full rounded-t-lg"
  />
  <section class="mx-6 my-6">
   <p class="text-xl font-bold">{{ country.name }} - {{ country.capital }}</p>
   <button class="font-bold" @click="modalOpen = true">See More...</button>
   <teleport to="#my-modal">
    <div v-if="modalOpen" id="myModal">
     <div class="relative popup font-mono shadow-md">
      <button class="text-3xl absolute right-7 top-2" @click="modalOpen = false">&times;</button>
      <p>Country Name: {{ country.name }}</p>
      <p>Country Native Name: {{ country.nativename }}</p>
      <p>Country Population: {{ country.population }}</p>
      <p>Country SubRegion: {{ country.subregion }}</p>
      <p>Country Domain: {{ country.topLevelDomain[0] }}</p>
     </div>
    </div>
   </teleport>
  </section>
 </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
 props: {
  country: Object,
 },

 setup() {
  const state = reactive({
   modalOpen: false,
  });

  return {
   ...toRefs(state),
  };
 },
};
</script>

<style scoped>
.popup {
 font-family: myriad-pro, sans-serif;
 position: fixed;
 bottom: 320px;
 left: 220px;
 width: 600px;
 padding: 30px;
 font-size: 2.1rem;
 background-color: #fff;
}
</style>