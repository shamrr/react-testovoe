import React from "react";
import styles from "./Button.module.sass";

const Button = (props) => {
    const {text = ''} = props;

    return <button className={styles.btn}>{text}</button>;
}

export default Button;