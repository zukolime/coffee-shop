const product = {
  state: {
    product: null,
  },
  mutations: {
    setProduct(state, product) {
      state.product = product;
    },
  },
  actions: {
    getProduct({ commit }, { pageName, id }) {
      fetch(`http://localhost:3000/${pageName}/${id}`)
        .then((res) => res.json())
        .then((data) => {
          commit("setProduct", data);
        });
    },
  },
  getters: {
    product: (state) => state.product,
  },
};
export default product;
