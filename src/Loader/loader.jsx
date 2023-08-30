import React from "react";
import loader from "../img/loader.png";
import styles from "./Loader.module.sass";

const Loader = () => {
    return <img src={loader} alt="loader" className={styles.loader} />
}

export default Loader;