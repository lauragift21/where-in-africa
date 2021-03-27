<template>
 <nav class="flex justify-between border-b-2 border-gray-50 my-4 py-2">
  <div class="flex align-center">
   <world-icon />
   <h2 class="pl-1 text-md lg:text-xl font-bold">Where In Africa?</h2>
  </div>
  <div class="flex">
   <p class="px-2 lg:px-4">GitHub</p>
   <p>Tutorial</p>
  </div>
 </nav>
</template>

<script>
import WorldIcon from "./WorldIcon";

export default {
 components: {
  WorldIcon,
 },
};
</script>

<style>
</style>