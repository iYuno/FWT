import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line @conarti/feature-sliced/absolute-relative
import type { RootState, AppDispatch } from "../../../app/store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
