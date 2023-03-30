import { appSliceActions } from "./slice"
import { appApi } from "../../../common/api/endpoints/appApi"
import { showErrorNotification } from "../../../common/utils/notifications"
import { TAppDispatch } from "../../store"

export const appActions = {
    ...appSliceActions,

    /**
     * Action for fetching user IP.
     */
    appGetUserIp: () => async (dispatch: TAppDispatch) => {
        dispatch(appActions.setAppLoading(true))

        appApi.getUserIp()
            .then((response) => {
                if (response.status === 200) {
                    dispatch(appActions.setAppUserIp(response.data))
                }
            })
            .catch(() => {
                showErrorNotification("Error occurred while fetching IP address")
            })
            .finally(() => {
                dispatch(appActions.setAppLoading(false))
            })
    }
}
