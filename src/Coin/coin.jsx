import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './Coin.module.sass';
import Loader from "../Loader/loader";
import Button from "../Button/button";
import { Link } from "react-router-dom";
import portfel from "../img/portfel.png"
import header from "../Header/Header.module.sass";

const Coin = (  ) => {
    const { coinId } = useParams();
    const [coin, setCoin] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [coinId]);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.coincap.io/v2/assets/${coinId}`);
            const responseCoin = await response.json();
            setCoin(responseCoin.data);

            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <React.Fragment>
        <header className={header.header}>
            <div className={header.header__container}>
                <div>
                    {coin.name}
                </div>
                <div className={header.header__right}>
                    <a href="#" className={header.header__portfel}>
                        <img src={portfel} alt="portfel" />
                    </a>
                </div>
            </div>
        </header>
        <main>
            <div className={styles.coin}>
                <div className={styles.coin__wrapper}>
                    <div className={styles.coin__image}>
                        <img src="https://static.rustore.ru/apk/256380351/content/ICON/d4db7e5a-8a8d-46ad-9509-1cefcf2e40ab.jpg" alt="coin" />
                    </div>
                    <div className={styles.coin__center}>
                        <h1 className={styles.coin__title}>
                            {coin.name}
                                <span className={styles.coin__symbol}>
                                    [{coin.symbol}]
                                </span>
                        </h1>
                        <div className={styles.coin__text}>Rank: <span>{coin.rank}</span></div>
                        <div className={styles.coin__text}>Supply: <span>{coin.supply}</span></div>
                        <div className={styles.coin__text}>Price in USD: <span>${coin.priceUsd}</span></div>
                        <div className={styles.coin__text}>Market capitalization in USD: <span>${coin.marketCapUsd}</span></div>
                        <div className={styles.coin__text}>Max-supply: <span>{coin.maxSupply}</span></div>
                    </div>
                    {/* <div className={styles.graph}>

                    </div> */}
                    <div className={styles.coin__buttons}>
                        <Button text="Add"/>
                        <Link to={'/'}>
                            <Button text="Back"/>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
        
        </React.Fragment>

    );
}

export default Coin;
