import React from 'react'
import './ItemDetail.css'
import ItemMin from '../Item/ItemMin'
import ItemCount from '../ItemCount/ItemCount';



const ItemDetail = ({productDetail, productRel}) => {

    return (
        <div className="row itemDetail py-4">
            <div className="col-12 row justify-content-center">
                <div className="col-12 col-sm-12 col-lg-6">
                    <img src={productDetail.img} alt="" className="img-fluid"/>
                </div>
                <div className="col-12 col-sm-12 col-lg-6 mt-sm-3 mt-lg-0">
                    <div>
                        <h3>{productDetail.nombre}</h3>
                        <h2>{productDetail.precio}</h2>
                        <small className="fst-italic">¡Disponible solo: {productDetail.stock} unidades!</small>
                        <div className="col-12 row justify-content-center mt-3" id='detalle'>
                            <p>{productDetail.descrip}</p>
                        </div>
                    </div>
                    <div>
                        <ItemCount stock={productDetail.stock} initial={1}/>
                    </div>
                </div>
            </div>
            <div className="col-12 row justify-content-center mt-3">
                <h6>Lo más buscado</h6>
                {productRel.map(p => <ItemMin key={p.id} product={p}/>)}
            </div>
        </div>
    )
}

export default ItemDetail
