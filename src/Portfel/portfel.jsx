import React from "react";
import styles from "./Portfel.module.sass"

const Portfel = ({ portfelItems }) => {
    return (
        <div className={styles.portfel}>
            <ul className={styles.portfel__list}>
                {
                    
                    // portfelItems.map(item => (
                    //     <li className={styles.portfel__item} key={item.id}>
                    //         {item}
                            
                    //     </li>
                    // ))
                }
            </ul>
        </div>
    )
}

export default Portfel;