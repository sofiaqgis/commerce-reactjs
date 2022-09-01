import Cart from './Cart';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function CartWidget() {
    return (
      <>
       <Button variant="light">
       <Cart/>
      <Badge bg="dark">9</Badge>
      </Button>
      </>
         
    );
  }
  
  export default CartWidget;