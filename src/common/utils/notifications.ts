import { notification } from "antd"

/**
 * Method for displaying error notification.
 */
export const showErrorNotification = (message: string, duration = 5) => {
    notification.open({
        type: "error",
        message: "Error!",
        description: message,
        duration: duration
    })
}

/**
 * Method for displaying success notification.
 */
export const showSuccessNotification = (message: string, duration = 5) => {
    notification.open({
        type: "success",
        message: "Success!",
        description: message,
        duration: duration
    })
}
