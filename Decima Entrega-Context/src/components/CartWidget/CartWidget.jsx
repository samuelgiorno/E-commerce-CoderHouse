import React, { useContext } from "react";
import CartContext from '../../context/CartContext/CartContext'

const CartWidget = () => {

    const { cantTotal } = useContext(CartContext)

    const cant = cantTotal()

    return ( 
        <>
        <div className="d-flex justify-content-center align-items-center">
            <span class="material-icons">shopping_bag</span>
            <p className="p-2 m-0">{cant}</p>
        </div>
        </>
     );
}
 
export default CartWidget;