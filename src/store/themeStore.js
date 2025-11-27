import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: "dark",
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "theme", // key in localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useThemeStore;