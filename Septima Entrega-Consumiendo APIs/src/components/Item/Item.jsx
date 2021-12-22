import React from 'react'
import ItemCount from '../ItemCount/ItemCount';


const Item = ({product}) => {

    return (
            <div className="col-3 d-flex flex-column justify-content-center align-items-top cardItem">
                <div>
                    <img src={product.img} alt="" className="img-fluid imgCard"/>
                </div>
                <div className="mt-3 px-1 textCard">
                    <div>
                        <h5>{product.nombre}</h5>
                    </div>
                    <div>
                        <h4>{product.precio}</h4>
                    </div>
                </div>
                <div className="ItemCount">
                    <ItemCount stock={product.stock} initial={1}/>
                </div>
            </div>
    )
}

export default Item
