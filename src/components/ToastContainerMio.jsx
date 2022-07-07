import React from 'react'
import { ToastContainer } from 'react-toastify'

const ToastContainerMio = () => {

  const styles = () => {
    if(window.innerWidth < 450){
      return {backgroundColor:'red'};
    }
  }
  return (
    <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={styles}
              />
  )
}

export default ToastContainerMio