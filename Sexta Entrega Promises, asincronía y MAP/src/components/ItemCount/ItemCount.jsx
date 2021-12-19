import React, { useState } from 'react'

import './ItemCount.styles.css';

const ItemCount = ({iniStock, maxStock}) => {

    const [value, setValue] = useState(iniStock);

    const handleSum = () => {
        if(value < maxStock){
            setValue(value + 1);
        }
        
    } 

    const handleSubtraction = () => {
        if(value > iniStock) {
            setValue(value - 1);
        }
    }

    return (
        <div className="buttonContainer">
            <button onClick={handleSubtraction}>-</button>
            <h4>{value}</h4>
            <button onClick={handleSum}>+</button>
        </div>
    )
}

export default ItemCount
