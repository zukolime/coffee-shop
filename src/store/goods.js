const goods = {
  state: {
    goods: [
      {
        id: 0,
        img: "coffee-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: 1,
        img: "coffee-2.jpg",
        name: "Presto Coffee Beans 1kg",
        country: "Brazil",
        price: 15.99,
      },
      {
        id: 2,
        img: "coffee-3.jpg",
        name: "AROMISTICO Coffee 1kg",
        country: "Brazil",
        price: 6.99,
      },
      {
        id: 3,
        img: "coffee-1.jpg",
        name: "Puro Arabica Kenya 1kg",
        country: "Kenya",
        price: 10.99,
      },
      {
        id: 4,
        img: "coffee-2.jpg",
        name: "Broceliande KENYA GOURMET 1kg",
        country: "Italy",
        price: 17.99,
      },
      {
        id: 5,
        img: "coffee-3.jpg",
        name: "Alpinico ESPRESSO INTENSO 1kg",
        country: "Colombia",
        price: 10.39,
      },
    ],
  },

  getters: {
    getGoods(state) {
      return state.goods;
    },
    getGoodsById(state) {
      return (id) => {
        return state.goods.find((card) => card.id === +id);
      };
    },
  },
};

export default goods;
