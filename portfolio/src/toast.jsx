import React from "react";
import { useContext } from "react";
import { ToastContext } from "./Context/ToastContext";

function Toast(){
    const {toast} = useContext(ToastContext);

    if(toast.isVisible == false){
        return null
    }

    return(
        <div className={`toast toast-${toast.type}`}>
           <p>{toast.message}</p>
        </div>
    )
}

export default Toast;