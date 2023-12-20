import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  setUser: (user) =>
    set((state) => ({
      ...state,
      user: user,
    })),
  logout: () => set({ user: null }),
}));
