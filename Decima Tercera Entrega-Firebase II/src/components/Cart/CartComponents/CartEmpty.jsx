import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
//import '../../../components/components.scss';
import UserContext from '../../../context/UserContext/UserContext';
import { Col, Row } from 'react-bootstrap';


const CartEmpty = () =>{
    const { notification, changeNotification} = useContext(UserContext)
        
    const navigate = useNavigate()
    

    useEffect(() => {
        
        changeNotification('¡Mirá los productos recién llegados!')
        
    }, [changeNotification])

    const goHome = (link) =>{
        navigate(link)
        changeNotification('')
    }
    
    return(
        <Row className='order mb-5'>
            <Col sm="8" className='orderDetails'>
                <h6>No hay productos en la bolsa</h6>
                <span className='idOrder'>{notification}</span>
            </Col>
            <Col sm='12'>
                <button onClick={() => goHome('/')} className='btnSecondary'>Ir a inicio</button>
            </Col>
        </Row>
    )
}

export default CartEmpty