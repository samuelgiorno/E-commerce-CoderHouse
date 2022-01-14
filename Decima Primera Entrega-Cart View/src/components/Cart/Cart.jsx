import React, { useContext } from "react";
//import { Trash } from 'react-bootstrap-icons';
import CartContext from '../../context/CartContext/CartContext'
import '../../components/components.scss';

export const CartItem = ({CartDetail}) => {

    const { deleteProduct } = useContext(CartContext)

    const deleteItem = (i) => {
        deleteProduct(i)
    }

    const getPrecio = () =>{
        const price = CartDetail.cant * CartDetail.precio
        return price.toFixed(2)
    }

    const precio = getPrecio()

    return (
        <article className="row col-8 justify-content-center align-items-center px-0 py-2 my-0">
            <div className='row col-10 offset-1 justify-content-between itemDetail align-items-center'>
                <div className='col-3 my-1 p-1'>
                    <img className="w-100" src={CartDetail?.img} alt="" />
                </div>
                <div className='row col-6 align-items-center'>
                    <div className='col-8 text-left'>
                        <h4>
                           {CartDetail?.nombre}
                        </h4>
                        <small className='cantCart fst-italic'>
                            Precio: ${CartDetail?.precio.toFixed(2)}
                        </small>
                    </div>
                    <div className='col-4 text-center'>
                        <span>Cantidad</span>
                        <h5 className='text-center'>{CartDetail?.cant}</h5>
                    </div>
                </div>
                <div className='col-3 text-center'>
                    <span>Subtotal</span>
                    <h4 className='text-center'>
                        ${precio}
                    </h4>
                </div>
            </div>
            <div className='col-1' id="deleteBtn">
                <div className='d-flex justify-content-center align-items-center' onClick={() => deleteItem(CartDetail.id)} style={{ cursor: 'pointer'}}>
                    <span class="material-icons">delete_outline</span>
                </div> 
            </div>
        </article>
        )
    }


const CartFooter = () =>{
    const { getTotalPrice, deleteAll, addItem } = useContext(CartContext)
    
    const precioTotal = addItem.length !== 0 ?`Total: $ ${getTotalPrice()}` :'Carrito vacio'

    const removeAll = () => {
        deleteAll()
    }

    return (
       
            <div className='row col-12 footerCartBg'>
                <div className='row col-3 justify-content-center align-items-center footerCart'>
                    <div className='col-2 removeAllDiv'>         
                       <button className='removeAll' onClick={() => removeAll()}>Vaciar bolsa</button>
                   </div>
                    <div className='col-12'>    
                        <h3>{precioTotal}</h3>
                    </div>
                   <div className='col-2 checkOutDiv'>         
                       <button className='checkOut'>Finalizar compra</button>
                   </div>
                </div>
            </div>
        
    )
}

const Cart = () =>{

    const { addItem } = useContext(CartContext)

    return (
        <section className='cart'>
            {addItem.map(item=><CartItem key={item.id} CartDetail={item}/> )}
            <CartFooter/>
        </section>
    )
}

export default Cart