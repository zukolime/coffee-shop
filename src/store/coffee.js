const coffee = {
  state: {
    coffee: [],
    searchValue: "",
    sortValue: "",
  },

  mutations: {
    setCoffeeData(state, data) {
      state.coffee = data;
    },
    setSearchValue(state, value) {
      state.searchValue = value;
    },
    setSortValue(state, value) {
      console.log(value);

      state.sortValue = value;
    },
  },

  actions: {
    setCoffeeData({ commit }, data) {
      commit("setCoffeeData", data);
    },
    setSearchValue({ commit }, data) {
      commit("setSearchValue", data);
    },
    setSortValue({ commit }, value) {
      commit("setSortValue", value);
    },
  },

  getters: {
    getCoffee(state) {
      return state.coffee;
    },
    getCoffeeById(state) {
      return (id) => {
        return state.coffee.find((card) => card.id === +id);
      };
    },
    getSearchValue(state) {
      return state.searchValue;
    },
  },
};

export default coffee;
