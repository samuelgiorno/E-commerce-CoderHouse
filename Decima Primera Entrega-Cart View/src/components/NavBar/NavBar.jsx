import './NavBar.css';
import logo from './logo.png';
import {Form, FormControl} from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import Favorito from '../Favorito/Favorito';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link to={`/`} id='brand' className="navbar-brand"><img src={logo} alt="" className="logo ms-2 p-0" style={{ maxHeight: '60px' }}/></Link>   
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar_R" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-left " id="nav">
                    <Link id="link" className="nav-link m-1" to={'/category/mujer'}>MUJER</Link>
                    <Link id="link" className="nav-link m-1" to={`/category/hombre`}>HOMBRE</Link>
                    <Link id="link" className="nav-link m-1" to={`/category/nino`}>NIÑOS</Link>
                    <div className="navbar-nav align-items-center justify-content-right">
                        
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Buscar zapatillas"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <button id="searchButton" className="searchButton" disabled>Buscar</button>
                        </Form>
                        <Link className="nav-link m-1" to={'#'}><CartWidget cant="0"/></Link>
                        <Link className="nav-link m-1" to={'#'}><Favorito cant="0"/></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar


