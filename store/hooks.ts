import { useDispatch } from "react-redux";
import { CartDispatch } from "./store";

type DispatchFunction = () => CartDispatch;

export const useCartDispatch: DispatchFunction = useDispatch;
