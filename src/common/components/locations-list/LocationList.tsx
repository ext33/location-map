import React, { FC, useEffect } from "react"

import { LoadingOutlined } from "@ant-design/icons"
import { Table } from "antd"

import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"

/**
 * Component for displaying location list for current user IP.
 */
const LocationList: FC = () => {

    const { userIp } = useTypedSelector((state) => state.app)
    const { isLoading, locations } = useTypedSelector((state) => state.location)
    const { getLocationsByIp } = useActions()

    useEffect(() => {
        getLocationsByIp(userIp)
    }, [])

    const tableCols = [
        {
            title: "IP",
            dataIndex: "ip",
            key: "ip",
        },
        {
            title: "Coord_x",
            dataIndex: "coord_x",
            key: "coord_x",
        },
        {
            title: "Coord_y",
            dataIndex: "coord_y",
            key: "coord_y",
        },
    ]

    return (
        <div>
            <Table
                columns={tableCols}
                dataSource={locations}
                loading={{
                    indicator: <LoadingOutlined />,
                    spinning: isLoading
                }}
                scroll={{ x: 400 }}
                pagination={false}
            />
        </div>
    )
}

export default LocationList
