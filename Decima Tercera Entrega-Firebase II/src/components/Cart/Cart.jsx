import React, { useContext } from "react"
import CartContext from '../../context/CartContext/CartContext'
import '../../components/components.scss'
import CartEmpty from "./CartComponents/CartEmpty"
import CartFull from './CartComponents/CartFull'

const Cart = () =>{

    const { addItem, orderState} = useContext(CartContext)
    
    if(addItem.length === 0 && !orderState){
        return <CartEmpty/>
    }

    return (
        <CartFull/>
    )
}

export default Cart