import React, { FC } from "react"

import { LoadingOutlined } from "@ant-design/icons"
import { Spin } from "antd"

interface ILoaderProps {
    loading?: boolean
    hasTip?: boolean
    children?: React.ReactElement
}

/**
 * Loader component.
 * @param loading - Icon spinning control flag.
 * @param hasTip - Tip displaying flag.
 * @param children - React element, may not be defined.
 */
const Loader: FC<ILoaderProps> = ({ loading = true, hasTip = false, children }) => {
    return (
        <Spin
            spinning={loading}
            indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
            tip={hasTip ? "Loading..." : ""}
        >
            {children}
        </Spin>
    )
}

export default Loader
