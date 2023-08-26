import React, { useEffect, useState } from "react";
import Button from "./button.jsx"

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

    return (
      <div className="table">
        <div className="table__header">Символ монеты</div>
        <div className="table__header">Логотип монеты</div>
        <div className="table__header">Цена в USD</div>
        <div className="table__header">Рыночная капитализация в USD</div>
        <div className="table__header">Изменение цены за 24 часа в %</div>
        <div className="table__header"></div>
    
        {coins.map((coin) => (
          <React.Fragment key={coin.id}>
            <div className="table__cell">{coin.symbol}</div>
            <div className="table__cell">{coin.priceUsd}</div>
            <div className="table__cell">{coin.marketCapUsd}</div>
            <div className="table__cell">{coin.volumeUsd24Hr}</div>  
            <div className="table__cell">
              <Button text="Add"/>
            </div>
          </React.Fragment>
        ))}
      </div>
    );
    
}

export default Coins;