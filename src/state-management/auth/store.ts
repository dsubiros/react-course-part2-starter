import { create } from "zustand";

interface AuthStore {
  userName: string;
  login: (userName: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  userName: "",
  login: (userName) => set(() => ({ userName })),
  logout: () => set(() => ({ userName: "" })),
}));

export default useAuthStore;
