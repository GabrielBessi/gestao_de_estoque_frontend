import { create } from "zustand";

export const productStore = create((set) => ({
  product: {},
  allProducts: [],

  getProduct: (product) => {
    set(() => ({ product: product }));
  },

  getAllProducts: (allProducts) => {
    set(() => ({
      allProducts: allProducts,
    }));
  },
}));
