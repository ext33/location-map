import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { ILocation, ILocationState } from "./types"

const initialState: ILocationState = {
    locations: [],
    isLoading: false
}

/**
 * Locations state slice.
 */
export const locationSlice = createSlice({
    name: "location",
    initialState: initialState,
    reducers: {
        setLocations: (state, action: PayloadAction<ILocation[]>) => {
            state.locations = action.payload
        },
        setLocationLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    }
})

export const locationSliceReducer = locationSlice.reducer
export const locationSliceActions = locationSlice.actions
