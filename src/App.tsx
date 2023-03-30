import React, { useEffect } from "react"

import { useActions } from "./common/hooks/useActions"
import AppRouter from "./router"

/**
 * App root component.
 */
const App = () => {

    const { appGetUserIp } = useActions()

    useEffect(() => {
        appGetUserIp()
    }, [])

    return (
        <div className="App">
            <AppRouter />
        </div>
    )
}

export default App
