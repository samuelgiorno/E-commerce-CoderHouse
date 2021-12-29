import React from 'react'
//import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({product}) => {

    return (
        <div className="col-3 d-flex flex-column justify-content-center align-items-top cardItem mt-4">
            <Link to={`/detail/${product.id}`} className="text-decoration-none text-black mt-1">
                <div>
                    <img src={product.img} alt="" className="img-fluid imgCard"/>
                </div>
                <div className="mt-3 px-1 textCard">
                        <h5>{product.nombre}</h5>
                        <h4>{product.precio}</h4>
                </div>
            </Link>
                {/*<div className="ItemCount">
                    <ItemCount cant={product.stock}/>
                </div>*/}
        </div>
    )
}

export default Item
