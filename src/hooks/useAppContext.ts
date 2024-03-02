import {Context} from "../hoc/ContextProvider";
import {useContext} from "react";

const useAppContext = () => useContext(Context)

export {
    useAppContext
}