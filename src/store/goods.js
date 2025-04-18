import { v4 as uuidv4 } from "uuid";

const goods = {
  state: {
    goods: [
      {
        id: uuidv4(),
        img: "coffee-1.jpg",
        title: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: uuidv4(),
        img: "coffee-2.jpg",
        title: "Presto Coffee Beans 1kg",
        country: "Brazil",
        price: 15.99,
      },
      {
        id: uuidv4(),
        img: "coffee-3.jpg",
        title: "AROMISTICO Coffee 1kg",
        country: "Brazil",
        price: 6.99,
      },
      {
        id: uuidv4(),
        img: "coffee-1.jpg",
        title: "Puro Arabica Kenya 1kg",
        country: "Kenya",
        price: 10.99,
      },
      {
        id: uuidv4(),
        img: "coffee-2.jpg",
        title: "Broceliande KENYA GOURMET 1kg",
        country: "Italy",
        price: 17.99,
      },
      {
        id: uuidv4(),
        img: "coffee-3.jpg",
        title: "Alpinico ESPRESSO INTENSO 1kg",
        country: "Colombia",
        price: 10.39,
      },
    ],
  },

  getters: {
    getGoods(state) {
      return state.goods;
    },
  },
};

export default goods;
