import Alert from "react-bootstrap/Alert";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {

    return (
        <div>
            <Alert style={{background: '#d7d6d1', color: '#0D1D2D', border: 'none', borderRadius: 'none'}}>    
            <p>{props.text}</p>
            <ItemCount stock={5} onAdd={()=>{}} initial={1} />
            </Alert>
        </div>
   )
}

export default ItemListContainer