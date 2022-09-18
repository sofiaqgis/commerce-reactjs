import { useContext } from 'react';
import { CartContext } from './CartContext';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import './Comp.css';




function Cart () {

    const {itemsCart, removeItem, clear} = useContext(CartContext);


    return (
        <>
        <Row className='margen3'>
        <ListGroup variant="flush">
        
        {
               itemsCart.map(item =>
                  
                <ListGroup.Item>
                <Row className="row row-cols-auto" >
               <Col><Card.Img variant="top" style={{width: '4rem'}} src={item.img} /></Col>
               <Col className="texto1">{item.title}</Col>
               <Col className="texto1">{item.pricetag}</Col>
               <Col>
               <Button onClick={()=>removeItem(item.id)} variant="outline-secondary" >Eliminar</Button> 
               </Col>   </Row>
                </ListGroup.Item> )
            
               } 
      
        </ListGroup>
        </Row>
        <Button onClick={clear} className='buttongroup' variant="outline-secondary" >Vaciar carrito</Button>
        </>
    )
}

export default Cart;