import CartPic from './CartPic';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';
import {useContext} from 'react';
import { Link } from 'react-router-dom';

function CartWidget() {

  const {totalItems} = useContext(CartContext);

    return (
      <>
       <Link to='/cart' style={{textDecoration: 'none'}}><Button variant="light">
       <CartPic/>
        {totalItems>0 
        ?<Badge bg="dark">{totalItems}</Badge>
        :<Badge bg="dark" style={{visibility: 'hidden'}}>{totalItems}</Badge>
        }
      </Button></Link>
      </>
         
    );
  }
  
  export default CartWidget;