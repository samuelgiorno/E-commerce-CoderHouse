import Imagen from './banner.png';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div className='Banner'>
          <Link to={`/`} id='brand' className="navbar-brand"><img src={Imagen} alt="" className="logo ms-2 p-0" style={{ maxHeight: '635px', marginTop: '20px'}}/></Link> 
        </div>
    );
}

export default Banner;