import CartPic from './CartPic';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';
import {useContext} from 'react';

function CartWidget() {

  const {totalItems} = useContext(CartContext);

    return (
      <>
       <Button variant="light">
       <CartPic/>
      <Badge bg="dark">{totalItems}</Badge>
      </Button>
      </>
         
    );
  }
  
  export default CartWidget;