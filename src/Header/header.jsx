import React from "react";
import styles from "./Header.module.sass";
import portfel from "../img/portfel.png";
import Modal from "../Modal/modal";
import { useState } from "react";
import Portfel from "../Portfel/portfel";

const Header = ({ coins, portfelItems }) => {
    const [showModal, setShowModal] = useState(false);
    
    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__left}>
                        {
                            coins.map((coin,index) => {
                                if (index < 3) {
                                    return <div key={index} className={styles.header__coin}>{coin.name} <span>${coin.priceUsd}</span></div>;
                                }
                            })
                        }
                </div>
                <div className={styles.header__right}>
                    <a href="#" className={styles.header__portfel} onClick={()=>setShowModal(true)}>
                        <img src={portfel} alt="portfel" />
                    </a>
                </div>
            </div>
            <Modal active={showModal} onClick={closeModal}>
                <div className={styles.header__modal}>YOUR BAG</div>
                <Portfel portfelItems={portfelItems}/>
            </Modal >
        </header>

    )
}

export default Header;