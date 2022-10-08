import CartPic from './CartPic';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';
import {useContext} from 'react';
import { Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


function CartWidget() {

  const {totalItems, itemsCart} = useContext(CartContext);

  const popover = (
    <Popover id="popover-basic">
    <Popover.Body>
   {
    itemsCart.map(item => 
       
     <ListGroup.Item>
     <Row className="row row-cols-auto" >
    <Col className="columna-7"><Card.Img variant="top" style={{width: '2rem'}} src={item.img} /></Col>
    <Col>
    <Col className="texto6">{item.title}</Col>
   <Col className="texto6">{item.quantity} prenda(s)</Col>
   </Col>
    </Row>
     </ListGroup.Item>  )
 
    } 
    <Link to='/cart' style={{textDecoration: 'none'}}><Button variant="outline-dark">Ir al carrito</Button></Link>
    </Popover.Body>
    </Popover>
  )

    return (
      <>
     <Button variant="light">
       <CartPic/>
        {totalItems>0 
        ?  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <Badge bg="dark">{totalItems}</Badge>
        </OverlayTrigger>
        :<Badge bg="dark" style={{visibility: 'hidden'}}>{totalItems}</Badge>
        }
      </Button>
      </>
         
    );
  }
  
  export default CartWidget;