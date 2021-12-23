import React, {useState} from 'react'
import './ItemCount.css'
//import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer'
//import { prueba } from '../ItemDetailContainer/ItemDetailContainer'
//import ItemListContainer from '../ItemListContainer/ItemListContainer'

const ItemCount = ({stock, initial}) => {

    const [count, setCount] = useState(1)
    const [stockDis, setStockDis] = useState(stock-1)

    const addOne = () => {
        setCount(count + 1);
        setStockDis(stockDis -1);
    }
    const restOne = () => {
        setCount(count - 1)
        setStockDis(stockDis +1);
    }
    const stop = (cant) => {
        return (count === cant) ?true :false
    }   

    /* const a =() => {
       const prueba = ItemDetailContainer()
        console.log(prueba);
    }
 */
    return (
        <div>
            <div> 
                <button id="menos" onClick={restOne} disabled={stop(initial)}>-</button>
                <label id="numero" className="text-center">{count}</label>
                <button id="mas" onClick={addOne} disabled={stop(stock)}>+</button>
            </div>
            <div>
                <button id="addCart">Agregar a la bolsa</button>
            </div>
        </div>
    )
}

export default ItemCount