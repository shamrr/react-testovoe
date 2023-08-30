import React, { useState } from "react";
import styles from "./Pagination.module.sass"

const Pagination = ({ coinsPerPage, totalCoins, paginate }) => {
    // const [isClicked, setIsClicked] = useState(false);
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return (
        <div>
            <ul className={styles.pagination} >
                { 
                    pageNumbers.map(number => (
                        <li className={styles.pagination__item} key={number}>
                            <a href="#" className={styles.pagination__link} onClick={ () => paginate(number) }>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination;