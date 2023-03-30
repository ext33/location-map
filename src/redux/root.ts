import { appActions } from "./slices/appSlice/actions"
import { appSliceReducer } from "./slices/appSlice/slice"
import { locationActions } from "./slices/locationSlice/actions"
import { locationSliceReducer } from "./slices/locationSlice/slice"

export const rootActions = {
    ...appActions,
    ...locationActions
}

export const rootReducer = {
    app: appSliceReducer,
    location: locationSliceReducer
}
