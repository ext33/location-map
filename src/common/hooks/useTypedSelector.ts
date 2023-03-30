import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

import { TAppDispatch, TRootState } from "../../redux/store"

/**
 * Hook for providing typed redux store state to components.
 */
export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector

/**
 * Hook for providing dispatch method to components.
 */
export const useAppDispatch = () => useDispatch<TAppDispatch>()
