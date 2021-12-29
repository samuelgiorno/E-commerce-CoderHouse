const CartWidget = ({cant}) => {
    return ( 
        <>
        <div className="d-flex justify-content-center align-items-center">
            <span class="material-icons">shopping_bag</span>
            <p className="p-2 m-0">{cant}</p>
        </div>
        
        </>
     );
}
 
export default CartWidget;