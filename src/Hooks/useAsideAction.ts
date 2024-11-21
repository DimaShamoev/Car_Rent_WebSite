import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../Store/Store"
import { toggleAside } from "../Store/AsideSlice";

const useAsideAction = () => {
    const asideState = useSelector((state: RootState) => state.asideMenu.value);
    const dispatch = useDispatch();

    const setAsideState = () => {
        dispatch(toggleAside())
    }

    return { asideState, setAsideState }
}

export default useAsideAction;