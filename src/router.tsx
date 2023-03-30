import React, { FC } from "react"

import { Navigate, Route, Routes } from "react-router-dom"

import Loader from "./common/components/loader/Loader"
import { routeNames } from "./common/constants/routeNames"
import { useTypedSelector } from "./common/hooks/useTypedSelector"
import HomePage from "./pages/home"
import NotFoundPage from "./pages/not-found"

/**
 * App router component.
 */
const AppRouter: FC = () => {

    const { isLoading } = useTypedSelector((state) => state.app)

    return isLoading ? (
        <div className="loading-container-full">
            <Loader />
        </div>
    ) : (
        <Routes>

            <Route
                path={routeNames.home}
                element={<HomePage />}
            />

            <Route
                path={routeNames.notFound}
                element={<NotFoundPage />}
            />

            <Route
                path="/"
                element={<Navigate to={routeNames.home} replace />}
            />
            <Route
                path="*"
                element={<Navigate to={routeNames.notFound} replace />}
            />

        </Routes>
    )
}

export default AppRouter
