import React from 'react'

const Item = ({prod}) => {
    return (
        <div className="card m-1" key={prod.id}>
            <img className="card-img-top" src={prod.img} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <h3>${prod.price}</h3>
                <p className="card-text">{prod.description}</p>
                <a href="#" class="btn btn-primary">Agregar al carro</a>
            </div>
        </div>
    )
}

export default Item
