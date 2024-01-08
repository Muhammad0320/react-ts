import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import { CartDispatch, RootState } from "./store";

type DispatchFunction = () => CartDispatch;

export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCartDispatch: DispatchFunction = useDispatch;
 
