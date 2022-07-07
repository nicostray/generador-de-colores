import { toast } from "react-toastify";

const toastNotify = (mensaje, tipo) => {
    if(tipo==="favorito"){
        toast.success(mensaje, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }else if(tipo==="copiado"){
        toast.info(mensaje, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }else if(tipo==="eliminado"){
        toast.error(mensaje, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
}

export default toastNotify;