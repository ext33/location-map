import { locationSliceActions } from "./slice"
import { locationApi } from "../../../common/api/endpoints/locationApi"
import { showErrorNotification, showSuccessNotification } from "../../../common/utils/notifications"
import { TAppDispatch } from "../../store"

export const locationActions = {
    ...locationSliceActions,

    /**
     * Action for fetching locations by IP.
     * @param ip - User IP.
     */
    getLocationsByIp: (ip: string) => async (dispatch: TAppDispatch) => {
        dispatch(locationActions.setLocationLoading(true))
        dispatch(locationActions.setLocations([]))

        locationApi.getLocationsByIp(ip)
            .then((response) => {
                if (response.status === 200) {
                    dispatch(locationActions.setLocations(response.data.data))
                }
            })
            .catch(() => {
                showErrorNotification("Error occurred while fetching locations")
            })
            .finally(() => {
                dispatch(locationActions.setLocationLoading(false))
            })

    },

    /**
     * Action for creating location.
     * @param ip - User IP.
     * @param x - Location X param.
     * @param y - Location Y param.
     */
    createLocation: (ip: string, x: number, y: number) => async (dispatch: TAppDispatch) => {
        dispatch(locationActions.setLocationLoading(true))

        locationApi.createLocation(ip, x, y)
            .then((response) => {
                if (response.status === 200) {
                    showSuccessNotification("Location created")
                }
            })
            .catch(() => {
                showErrorNotification("Error occurred while creating location")
            })
            .finally(() => {
                dispatch(locationActions.setLocationLoading(false))
            })

    },
}
