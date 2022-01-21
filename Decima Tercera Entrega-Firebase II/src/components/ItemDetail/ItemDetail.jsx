import React, { useState, useContext } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../context/CartContext/CartContext';

const ItemDetail = ({productDetail}) => {

    const [typeCount, setTypeCount] = useState('CountButton')

    const controlStock = (productDetail?.stock > 0)
        ?   `¡Queda solo ${productDetail?.stock} unidades!`
        :   `Lo sentimos, ya no queda unidades`

    const{ addProduct } = useContext(CartContext)
    
    const sumarItem = (count) => {
        if (productDetail.stock >= count){
            const value = {...productDetail, cant: count}
            productDetail.stock = productDetail.stock - count
            addProduct(value)
            setTypeCount('GoCart')
        }
    }

    return (
        <div className="itemDetail py-3">
            <div className="col-12 row justify-content-center">
                <div className="col-12 col-sm-12 col-lg-6" id='imgDetail'>
                    <img src={productDetail?.img} alt="" className="img-fluid"/>
                </div>
                <div className="col-10 col-sm-10 col-lg-6 mt-sm-3 mt-lg-0" id='detail'>
                    <div className='col-10 col-sm-10 col-lg-6'>
                        <h3>{productDetail?.nombre}</h3>
                        <h1>${(productDetail?.precio).toFixed(2)}</h1>
                        <small className="fst-italic">{controlStock}</small>
                        <div className="col-12 justify-content-center" id='detalle'>
                            <h5>Detalle:</h5>
                            <p>{productDetail?.descrip}</p>
                        </div>
                        <div className="col-10 col-sm-10 col-lg-6 mt-sm-3 mt-lg-3">
                            <ItemCount action={sumarItem} cant={productDetail?.stock} inputType={typeCount} id='addCart'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
