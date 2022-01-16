import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext/CartContext'

const CartWidget = () => {

    const { cantTotal } = useContext(CartContext)

    const cant = cantTotal()

    return ( 
        <>
            <Link className="nav-link m-1" to={'/cart'}>
                <div className="d-flex justify-content-center align-items-center">
                    <span class="material-icons">shopping_bag</span>
                    <p className="p-2 m-0">{cant}</p>
                </div>
            </Link>
        </>
     );
}
 
export default CartWidget;