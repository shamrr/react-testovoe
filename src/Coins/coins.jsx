import React from "react";
import Button from "../Button/button";
import styles from "./Coins.module.sass";
import { Link } from "react-router-dom";
import Loader from "../Loader/loader.jsx";

const Coins = ({coins, loading, addToPortfel}) => {
    if(loading) {
      return <Loader/>
    }
    
    const formatPrice = (price) => {
      return Number(price).toFixed(2);
    }

    return (
      <div className={styles.table}>
        <div className={styles.table__top}>
          <div className={styles.table__header}>Сoin symbol</div>
          <div className={styles.table__header}>Сoin logo</div>
          <div className={styles.table__header}>Price in USD</div>
          <div className={styles.table__header}>Market capitalization in USD</div>
          <div className={styles.table__header}>Price change in 24 hours in %</div>
          <div className={styles.table__header}></div>
        </div>
      
        {
          coins.map(coin => (
            <Link to={`coin/${coin.id}`}  className={styles.table__link} key={coin.id}>
              <div className={styles.table__row}>
                <div className={styles.table__cell}>{coin.symbol}</div>
                <div className={styles.table__cell}>
                  <img src={coin.thumbnail} alt="logo" />
                </div>
                <div className={styles.table__cell}>${formatPrice(coin.priceUsd)}</div>
                <div className={styles.table__cell}>${formatPrice(coin.marketCapUsd)}</div>
                <div className={styles.table__cell}>{formatPrice(coin.changePercent24Hr)}%</div>  
                <div className={styles.table__cell}>
                  <Button text="Add" onClick={() => addToPortfel(coin)} />
                 
                  
                </div>
              </div>
            </Link>
          ))
        }
        
      </div>
    );
}

export default Coins;