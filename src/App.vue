<template>
  <Nav />
  <CountriesList />
</template>

<script>
import Nav from "./components/Nav";
import CountriesList from "./components/CountriesList";

export default {
  name: "App",
  components: {
    Nav,
    CountriesList
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 3rem;
}
</style>
