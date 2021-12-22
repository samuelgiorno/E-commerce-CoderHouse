import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import { getProductos } from '../../Global/Js/productos'

const ItemListContainer = () => {
    const[productos, setProductos] = useState([])

    useEffect(() =>{
        const listaProductos = getProductos()
        listaProductos.then(listaProductos =>{
            setProductos(listaProductos)
        })
        return (()=>{
            setProductos([])
        })
    },[])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <ItemList productos={productos}/>
            </div>
        </div>
    )
}

export default ItemListContainer
