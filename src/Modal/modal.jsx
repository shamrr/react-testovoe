import React from "react";
import styles from "./Modal.module.sass"

const Modal = ({ onClose, active, children }) => {
    if(!active){
        return null;
    }

    return (
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;