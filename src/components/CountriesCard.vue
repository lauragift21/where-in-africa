<template>
 <div class="border-2 border-white h-full shadow-md rounded-lg">
  <img
   :src="country.flag"
   alt="country flag"
   class="object-cover h-40 w-full rounded-t-lg"
  />
  <section class="mx-6 my-6">
   <p class="text-xl font-bold">{{ country.name }} - {{ country.capital }}</p>
   <teleport to="#my-modal">
    <button @click="modalOpen = true">Open full screen modal!</button>
    <div v-if="modalOpen" id="myModal">
     <div>
      I'm a modal!
      <button @click="modalOpen = false">Close</button>
     </div>
    </div>
   </teleport>
  </section>
 </div>
</template>

<script>
// import { reactive } from "vue";

export default {
 props: {
  country: Object,
 },
 data() {
  return {
   modalOpen: false,
  };
 },

 //  setup() {
 //   const state = reactive({
 //    modalOpen: false,
 //   });

 //   return {
 //    state,
 //   };
};
</script>

<style lang="scss" scoped>
</style>