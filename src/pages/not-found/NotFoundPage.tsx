import React, { FC } from "react"

import { Button, Result } from "antd"
import { useNavigate } from "react-router-dom"

import { routeNames } from "../../common/constants/routeNames"

/**
 * Not found page.
 */
const NotFoundPage: FC = () => {

    const navigate = useNavigate()

    return (
        <div className="page centered-page">
            <Result
                status="warning"
                title="404 | Page not found."
                extra={
                    <Button
                        type="primary"
                        onClick={() => navigate(routeNames.home)}
                    >
                        Go home
                    </Button>
                }
            />
        </div>
    )
}

export default NotFoundPage
