import { create } from "zustand";

export const loginStore = create((set) => ({
  user: [],
  registerUser: [],

  login: (user) => {
    set(() => ({ user: [user] }));
  },

  newRegister: (user) => {
    set(() => ({ registerUser: [user] }));
  },
}));
