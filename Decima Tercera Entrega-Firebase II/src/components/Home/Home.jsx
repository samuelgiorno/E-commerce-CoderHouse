import React from 'react'
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
//import FrontPage from '../FrontPage/FrontPage';
import { Col, Row } from 'react-bootstrap';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Home = () =>{

    const navigate = useNavigate()
    const goProducts = () =>{
        navigate('/productos')
    }

    return (
        <Container className='mt-4'>
        <Row className="bg_home">
            <Col>
                <img src={'../media/background.png'} alt="background"/>
            </Col>
            <Col className='bg_cta'>
                <h1 class="title">ESTE AÑO, TE MUEVES</h1>
                <h2 class="summary">Encuentra aquí todo lo que necesitas para empezar el año a tu manera y ritmo</h2>
                <button type="button" title="COMPRAR AHORA" className='btn_cta' onClick={() => goProducts()}><span>COMPRAR AHORA</span></button>
            </Col>
        </Row>
        <ItemListContainer/>  
        </Container>
    )

}

export default Home