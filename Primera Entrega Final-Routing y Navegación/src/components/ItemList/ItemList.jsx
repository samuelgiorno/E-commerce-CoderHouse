import Item from '../Item/Item'

const ItemList = ({productos}) => {
    return (
        <div className="row justify-content-center align-items-start mt-2 col-12">
            {productos.map(p =><Item key={p.id} product={p}/>)}
        </div>
    )
}

export default ItemList