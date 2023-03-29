import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

import { TAppDispatch, TRootState } from "../../redux/store"

export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector
export const useAppDispatch = () => useDispatch<TAppDispatch>()
