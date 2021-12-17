import React, { useState, useEffect } from 'react';
import { getFetch } from '../../Helpers/getFetch';
import ItemList from '../ItemList/ItemList';
// import ItemCount f rom '../ItemCount/ItemCount';


const ItemsListContainer = props => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getFetch
            .then(resp => setProducts(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, []);

    return (
        <div style={{display: 'flex', flexDirection:'column',justifyContent: 'center', alignItems:'center',paddingTop: '3rem'}}>
            <h2>{props.greeting}</h2>
            { loading ?
                <h2>Cargando...</h2>
                :
                <ItemList products={products}/>

            }
            {/* <ItemCount iniStock={1} maxStock={10}/> */}
        </div>
    )
}

export default ItemsListContainer
