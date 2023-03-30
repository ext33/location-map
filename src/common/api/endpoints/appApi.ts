import axios, { AxiosResponse } from "axios"

import { GET_IP_URL } from "../urls"

export const appApi = {

    /**
     * API method for fetching user IP.
     */
    getUserIp: (): Promise<AxiosResponse> => {
        return axios.get(GET_IP_URL)
    },

}
