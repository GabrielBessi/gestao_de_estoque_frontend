import { create } from "zustand";

export const productStore = create((set) => ({
  product: {},

  getProduct: (product) => {
    set(() => ({ product: product }));
  },
}));
