import { useReducer } from "react";
import counterReducer from "./counterReducer";

const useCounter = () => useReducer(counterReducer, 0);

export default useCounter