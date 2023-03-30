import L, { Icon, IconOptions } from "leaflet"

/**
 * Constant with map marker icon creator.
 */
export const markerIcon: Icon<IconOptions> = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
    iconSize: [ 25, 41 ],
    iconAnchor: [ 13, 0 ]
})
