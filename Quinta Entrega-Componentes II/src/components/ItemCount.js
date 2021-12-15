import React from 'react'
import {useState} from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    let [count, setCount] = useState(initial);
    const [stockMax] = useState(5)
    const [stockMin] = useState(0)

    const mas = () => {
        if(count + 1 <= stockMax ){
        setCount(count + 1);
        }else {
            alert ("Cantidad máxima de stock seleccionada")
        }
    }

    const menos = () => {
        if(count - 0 >= stockMin){
        setCount(count - 1);
        }else {
            alert("No se puede reducir mas")
        }
    }

    const addToCart = () => {
        if(stock > 0){
            onAdd(count);
        }
    }

    if(stock > 0){
    return(
        <div>
            <button id="menos" onClick={menos}>-</button>
            <button id="numero">{count}</button>
            <button id="mas" onClick={mas}>+</button>
            <button id="agregar" onClick={addToCart}>Agregar a la bolsa</button>
            <p>Productos agregados a la bolsa: {count}</p>
        </div>
    )
        }else{
            return(
                <div>     
                    <button id="menos" onClick={menos}>-</button>
                    <button id="numero">{count}</button>
                    <button id="mas" onClick={mas}>+</button>
                    <button id="agregar" disabled>Agregar a la bolsa</button>
                    <p>Productos agregados a la bolsa: {count}</p>
                </div>
            )
}
}

export default ItemCount;
