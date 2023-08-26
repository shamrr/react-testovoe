import React, { useEffect, useState } from "react";
import Button from "../Button/button";
import styles from "./Coins.module.sass";

const Coins = () => {
    const [coins, setCoins] = useState([]); // Устанавливаем начальное значение как пустой массив

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        try {
            const response = await fetch('https://api.coincap.io/v2/assets');
            const responseCoins = await response.json();
            setCoins(responseCoins.data); 
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
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
            <div className={styles.table__cell}>${formatPrice(coin.volumeUsd24Hr)}</div>  
            <div className={styles.table__cell}>
              <Button text="Add"/>
            </div>
          </React.Fragment>
        ))}
      </div>
    );
}

export default Coins;