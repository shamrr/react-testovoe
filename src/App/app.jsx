import React, {useEffect, useState } from "react";
import Coins from "../Coins/coins";
import Pagination from "../Pagination/pagination";

const App = () => {
    const [coins, setCoins] = useState([]); // Устанавливаем начальное значение как пустой массив
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [coinsPerPage] = useState(10);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            
            const response = await fetch('https://api.coincap.io/v2/assets');
            const responseCoins = await response.json();
            setCoins(responseCoins.data); 

            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const lastCoinsIndex = currentPage * coinsPerPage;
    const firstCoinsIndex = lastCoinsIndex - coinsPerPage;
    const currentCoins = coins.slice(firstCoinsIndex, lastCoinsIndex);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return(
        <div>
            <Coins coins={currentCoins} loading={loading}/>
            <Pagination 
                coinsPerPage={coinsPerPage} 
                totalCoins={coins.length}
                paginate={paginate}
            />
        </div>
    )
}

export default App;