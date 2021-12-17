import React from 'react';
import Item from '../Item/Item';

const ItemList = ({products}) => {
    return (
        <div className="d-flex p-2">
            {products.map((prod) => <Item prod={prod}/>)}
        </div>
    )
}

export default ItemList
