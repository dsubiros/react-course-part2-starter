import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface CounterStore {
  counter: number;
  increment: () => void;
  reset: () => void;
  max: number;
}

const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  max: 5,
  increment: () =>
    set((store) => ({
      counter: store.counter + 1,
    })),
  reset: () =>
    set(() => ({
      // max: 10,
      counter: 0,
    })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Counter Store", useCounterStore);

export default useCounterStore;
