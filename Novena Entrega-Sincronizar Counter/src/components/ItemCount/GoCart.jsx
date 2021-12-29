import React from 'react';
import './ItemCount.css';

const GoCart = ({stock, initial}) => {

    return (
            <div className='col-12 goCart'>
                <div className='row justify-content-center mb-2'>

                </div>
                <div className="text-center" id="cardCount">
                    <button className="btn p-0" id="goCart">Ir a la Bolsa</button>
                </div>
            </div>
    )
}

export default GoCart