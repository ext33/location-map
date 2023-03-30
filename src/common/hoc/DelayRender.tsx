import React, { FC, useEffect, useState } from "react"

interface IDelayRenderProps {
    delay: number
    children: React.ReactElement
}

/**
 * Delay render hoc.
 * Using for render components with delay.
 * @param delay - Delay in ms
 * @param children - Component / React element for render
 */
const DelayRender: FC<IDelayRenderProps> = ({ delay, children }) => {
    const [ isShown, setIsShown ] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShown(true)
        }, delay)

        return () => clearTimeout(timer)
    }, [ delay ])

    return isShown ? children : null
}

export default DelayRender
