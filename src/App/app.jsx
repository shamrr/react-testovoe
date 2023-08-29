import React, {useEffect, useState } from "react";
import Coins from "../Coins/coins";
import Pagination from "../Pagination/pagination";

import Header from "../Header/header";
import Modal from "../Modal/modal";

const App = () => {
    const [coins, setCoins] = useState([]); // Устанавливаем начальное значение как пустой массив
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [coinsPerPage] = useState(10);
    const [portfelItems, setPortfelItems] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.coincap.io/v2/assets');
            const responseCoins = await response.json();
            setCoins(responseCoins.data); 

            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    const lastCoinsIndex = currentPage * coinsPerPage;
    const firstCoinsIndex = lastCoinsIndex - coinsPerPage;
    const currentCoins = coins.slice(firstCoinsIndex, lastCoinsIndex);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const addToPortfel = (prod) => {
        setPortfelItems(prevItems => [...prevItems, prod]);
    }

    return(
        <div>
            <Header
                coins={coins}   
                portfelItems={portfelItems} 
            />
            <main>
                <Coins coins={currentCoins} loading={loading} addToPortfel={addToPortfel}/>
                <Pagination 
                    coinsPerPage={coinsPerPage} 
                    totalCoins={coins.length}
                    paginate={paginate}
                />
            </main>
        </div>
        
    )
}

export default App;