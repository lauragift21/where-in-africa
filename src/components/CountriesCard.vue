<template>
 <div class="border-2 border-white shadow-md rounded-lg">
  <div>
   <img
    :src="country.flag"
    alt="country flag"
    class="object-cover h-40 w-full rounded-t-lg"
   />
  </div>
  <div class="mx-6 my-8">
   <p class="text-2xl font-bold">{{ country.name }}</p>
   <p class="font-bold text-lg">
    Population:
    <span class="font-normal">{{ country.population }}</span>
   </p>
   <p class="font-bold text-lg">
    Languages:
    <span class="font-normal">{{ country.languages[0].name }}</span>
   </p>
   <p class="font-bold text-lg">
    Capital:
    <span class="font-normal">{{ country.capital }}</span>
   </p>
  </div>
 </div>
</template>

<script>
export default {
 props: {
  country: Object,
 }
};
</script>

<style lang="scss" scoped>
</style>