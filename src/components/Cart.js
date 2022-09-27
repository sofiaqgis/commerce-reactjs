import { useContext } from 'react';
import { CartContext } from './CartContext';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import './Comp.css';
import { Link } from 'react-router-dom';






function Cart () {

    const {itemsCart, totalItems, removeItem, clear} = useContext(CartContext);

 

    return (
        <>
        <Row className='row row-cols-auto'>

         <Col className='columna-6 d-flex justify-content-end'>


        <ListGroup variant="flush">
        
        {
               itemsCart.map(item => 
                  
                <ListGroup.Item>
                <Row className="row row-cols-auto" >
               <Col><Card.Img variant="top" style={{width: '4rem'}} src={item.img} /></Col>
               <Col className="texto1">{item.title}</Col>
              <Col className="texto1">
              <Row className="texto1">{item.pricetag} p/u</Row>
               <Row className="texto1">{item.quantity} prenda(s)</Row>
              </Col>
              <Col className="texto1"></Col>
               <Col>
               <Button onClick={()=>removeItem(item.id)} variant="outline-secondary e22" >Eliminar</Button> 
               </Col>   </Row>
                </ListGroup.Item>  )
            
               } 
             <Col><Link to='/' style={{textDecoration: 'none'}}><Button className='e22' variant="outline-dark" >Seguir comprando</Button></Link></Col>  
        </ListGroup>
        </Col>
  { totalItems!==0
        ? <Col className='columna-6'>
        <Card className='cardCheckOut' style={{ width: '25rem', height: '23rem' }}>
      <Card.Body className='columna-5'>
        <Card.Title className='textotitle'>Orden de compra</Card.Title>
        <br></br>
        <Card.Text className='three'>Subtotal: $</Card.Text>
        <Card.Text className='three'>Impuestos: $</Card.Text>
        <Card.Text className="four">Total: $</Card.Text>
        <Card.Text className="buttongroup2"><Button className='buttongroup' variant="outline-dark">Finalizar compra</Button></Card.Text>
      </Card.Body>
    </Card>
    <Button onClick={clear} className='buttongroup' variant="outline-secondary" >Vaciar carrito</Button>
        </Col>
       : <Col className='margin5 three'>Tu carrito esta vacío</Col>
}

     </Row>
     

        </>
        
    )
}

export default Cart;