import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"

import { rootActions } from "../../redux/root"

/**
 * Hook for providing actions to components.
 */
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(rootActions, dispatch)
}
