import React, { FC, useState } from "react"

import { Button, Modal } from "antd"

import LocationList from "../../common/components/locations-list/LocationList"
import Map from "../../common/components/map/Map"

/**
 * Home page component.
 */
const HomePage: FC = () => {

    const [ mapModalOpen, setMapModelOpen ] = useState(false)
    const [ locationsModalOpen, setLocationsModelOpen ] = useState(false)

    return (
        <div className="page centered-page">

            <Button
                className="home-page__modal-button"
                size="large"
                type="primary"
                onClick={() => setMapModelOpen(true)}
            >
                OPEN MAP
            </Button>

            <Button
                className="home-page__modal-button"
                size="large"
                type="default"
                onClick={() => setLocationsModelOpen(true)}
            >
                SHOW LOCATIONS
            </Button>

            <Modal
                title="List of locations"
                open={locationsModalOpen}
                onCancel={() => setLocationsModelOpen(false)}
                footer={null}
                mask={false}
                destroyOnClose
                centered
            >
                <LocationList />
            </Modal>

            <Modal
                title="Transparenterra community map"
                open={mapModalOpen}
                onCancel={() => setMapModelOpen(false)}
                footer={null}
                mask={false}
                destroyOnClose
                centered
            >
                <Map />
            </Modal>

        </div>
    )
}

export default HomePage
