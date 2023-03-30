import React, { FC, useState } from "react"

import { Button } from "antd"
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet"

import { markerIcon } from "./MarkerIcon"
import DelayRender from "../../hoc/DelayRender"
import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import Loader from "../loader/Loader"

interface IMapControlsProps {
    setSelectedCoords: React.Dispatch<React.SetStateAction<{x: number, y: number} | null>>
}

/**
 * Map controls component.
 * Using for binding map events (click, etc.).
 * @param setSelectedCoords - method for updating selected coords
 */
const MapControls: FC<IMapControlsProps> = ({ setSelectedCoords }) => {
    useMapEvents({
        click: (event) => {
            const { lat, lng } = event.latlng

            setSelectedCoords({ x: lat, y: lng })
        }
    })

    return null
}

/**
 * Component with map, controls and saving selected map coords.
 * * In this component map rendering with delay, because there is issue with map rendering in modal window in react-leaflet package.
 */
const Map: FC = () => {

    const [ selectedCoords, setSelectedCoords ] = useState<{ x: number, y: number } | null>(null)

    const { userIp } = useTypedSelector((state) => state.app)
    const { isLoading } = useTypedSelector((state) => state.location)
    const { createLocation } = useActions()

    /**
     * Method for saving current user location.
     */
    const saveCurrentLocation = () => {
        if (selectedCoords) {
            createLocation(userIp, selectedCoords.x, selectedCoords.y)
        }
    }

    return (
        <Loader loading={isLoading}>
            <DelayRender delay={10}>
                <>
                    <MapContainer
                        style={{ height: 500, width: "100%", borderRadius: 8 }}
                        center={[ 51.550, -0.15 ]}
                        zoom={12}
                        scrollWheelZoom={false}
                        doubleClickZoom={false}
                    >
                        <MapControls setSelectedCoords={setSelectedCoords} />
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {
                            selectedCoords ?
                                <Marker
                                    position={[ selectedCoords.x, selectedCoords.y ]}
                                    icon={markerIcon}
                                >
                                    <Popup>
                                        Your position
                                    </Popup>
                                </Marker>
                                :
                                null
                        }
                    </MapContainer>

                    <Button
                        className="modal__button"
                        type="primary"
                        disabled={!selectedCoords}
                        onClick={() => saveCurrentLocation()}
                    >
                        Save
                    </Button>
                </>
            </DelayRender>
        </Loader>
    )
}

export default Map
