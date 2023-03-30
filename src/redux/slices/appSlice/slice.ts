import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { IAppState } from "./types"

const initialState: IAppState = {
    userIp: "",
    isLoading: false
}

/**
 * App state slice.
 */
export const appSlice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        setAppUserIp: (state, action: PayloadAction<string>) => {
            state.userIp = action.payload
        },
        setAppLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    }
})

export const appSliceReducer = appSlice.reducer
export const appSliceActions = appSlice.actions
