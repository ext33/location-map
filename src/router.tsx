import React, { FC } from "react"

import { Navigate, Route, Routes } from "react-router-dom"

import { routeNames } from "./common/constants/routeNames"
import HomePage from "./pages/home"
import NotFoundPage from "./pages/not-found"

const AppRouter: FC = () => {
    return (
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
