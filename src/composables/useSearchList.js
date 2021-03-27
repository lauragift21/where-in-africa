import { reactive, toRefs, computed } from 'vue';

export default function useSearchList() {
  const state = reactive({
    search: '',
    countries: [],
  });
  const searchList = computed(() => {
    return state.countries.filter((country) => {
      console.log('SearchList:', state.countries);
      return country.name.toLowerCase().includes(state.search.toLowerCase());
    });
  });

  return {
    ...toRefs(state),
    searchList,
  };
}
