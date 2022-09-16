import { useContext } from 'react';
import { CartContext } from './CartContext';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, ListGroupItem } from 'react-bootstrap';

function Cart () {

    const {itemsCart, removeItem, clear} = useContext(CartContext);


    return (
        <>
        <div><p>Carrito</p></div>
        <ListGroup variant="flush">
        
        {
               itemsCart.map((item) =>{
            //    <ListGroupItem>{item}
            //    <Button onClick={removeItem} variant="outline-secondary" >Eliminar</Button>
            //    </ListGroupItem>}  )
            console.log(item)})  
               } 
      
        </ListGroup>
        <Button onClick={clear} variant="outline-secondary" >Vaciar carrito</Button>
        </>
    )
}

export default Cart;