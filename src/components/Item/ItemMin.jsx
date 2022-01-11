const ItemMin = ({product}) => {

        return (
                <div className="col-3 d-flex flex-column text-center cardItemMin">
                        <img src={product.img} alt="" className="img-fluid imgItemMin"/>
                </div>
        )
        
    }
    
    export default ItemMin