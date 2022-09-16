import CartPic from './CartPic';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function CartWidget() {
    return (
      <>
       <Button variant="light">
       <CartPic/>
      <Badge bg="dark">9</Badge>
      </Button>
      </>
         
    );
  }
  
  export default CartWidget;