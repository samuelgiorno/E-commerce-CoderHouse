import React from 'react'
import './ItemDetail.css'
//import ItemMin from '../Item/ItemMin'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({productDetail}) => {

    return (
        <div className="row itemDetail py-3">
            <div className="col-12 row justify-content-center">
                    <div className="col-12 col-sm-12 col-lg-6" id='imgDetail'>
                        <img src={productDetail?.img} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-6 mt-sm-3 mt-lg-0 row" id='detail'>
                        <div className='col-12 col-sm-12 col-lg-6'>
                            <h3>{productDetail?.nombre}</h3>
                            <h1>{productDetail?.precio}</h1>
                            <small className="fst-italic">¡Disponible solo {productDetail?.stock} unidades!</small>
                            <div className="col-12 justify-content-center mt-3" id='detalle'>
                                <h5>Detalles:</h5>
                                <p>{productDetail?.descrip}</p>
                            </div>
                            <div className="col-12 col-sm-12 col-lg-6 mt-sm-3 mt-lg-3">
                                <ItemCount stock={productDetail?.stock} initial={1}/>
                            </div>
                        </div>
                    </div>
            </div>
           
        {/*     <div className="col-12 row justify-content-center mt-3">
                <h6>Lo más buscado</h6>
                {productRel.map(p => <ItemMin key={p.id} produc={p}/>)}
            </div> */}
        </div>
    )
}

export default ItemDetail
