import React from "react";
import Button from "../Button/button";
import styles from "./Coins.module.sass";

const Coins = ({coins, loading}) => {
    if(loading) {
      return <h2>Loading...</h2>;
    }
    
    const formatPrice = (price) => {
      return Number(price).toFixed(2);
    }

    return (

      <div className={styles.table}>
        <div className={styles.table__header}>Символ монеты</div>
        <div className={styles.table__header}>Логотип монеты</div>
        <div className={styles.table__header}>Цена в USD</div>
        <div className={styles.table__header}>Рыночная капитализация в USD</div>
        <div className={styles.table__header}>Изменение цены за 24 часа в %</div>
        <div className={styles.table__header}></div>
    
        {coins.map((coin) => (
          <React.Fragment key={coin.id}>
            <div className={styles.table__cell}>{coin.symbol}</div>
            <div className={styles.table__cell}>{coin.symbol}</div>
            <div className={styles.table__cell}>${formatPrice(coin.priceUsd)}</div>
            <div className={styles.table__cell}>${formatPrice(coin.marketCapUsd)}</div>
            <div className={styles.table__cell}>{formatPrice(coin.changePercent24Hr)}%</div>  
            <div className={styles.table__cell}>
              <Button text="Add"/>
            </div>
          </React.Fragment>
        ))}
      </div>
    );
}

export default Coins;