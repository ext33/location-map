import axios, { AxiosResponse } from "axios"

import { CREATE_LOCATION_URL, GET_LOCATIONS_BY_IP } from "../urls"

export const locationApi = {

    /**
     * API method for fetching locations by IP.
     * @param ip - User IP.
     */
    getLocationsByIp: (ip: string): Promise<AxiosResponse> => {
        const data = {
            ip: ip
        }

        return axios.post(GET_LOCATIONS_BY_IP, data)
    },

    /**
     * API method for creating location.
     * @param ip - User IP.
     * @param x - Location X param.
     * @param y - Location Y param.
     */
    createLocation: (ip: string, x: number, y: number): Promise<AxiosResponse> => {
        const data = {
            ip: ip,
            coord_x: x,
            coord_y: y
        }

        return axios.post(CREATE_LOCATION_URL, data)
    }
}
