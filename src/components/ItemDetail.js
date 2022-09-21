
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './Comp.css';
import {Link} from 'react-router-dom';
import React, { useContext } from 'react';
import {useState} from 'react';
import { CartContext } from './CartContext';


function ItemDetail ({item}) {

  const[itemCount, setItemCount] = useState(0);
  const {addItem} = useContext(CartContext);

    const onAdd = (qty) => {
        alert("Ha seleccionado "+ qty +" prendas")
        
        setItemCount(qty)
        addItem(item, qty)
        
        
      
  }

    return (
        
   <Row className="justify-content-center">
    <Card style={{ width: '50rem', margin: '2rem', border: 'transparent' }}>
    <Row xs={1} sm={2} md={2} className="justify-content-center g-4">
   <Col >
    <Card.Img variant="top" className="img-fluid rounded" src={item.img} />
    </Col>
    <Col>
      <Card.Body>
        <br></br>
        <Card.Title className="text-center">{item.title}</Card.Title>
        <Card.Title className="text-center two">{item.pricetag}</Card.Title>
        <br></br>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Color: {item.color}</ListGroup.Item>
        <ListGroup.Item>Estilo: {item.style}</ListGroup.Item>
        <ListGroup.Item>Estampa: {item.print}</ListGroup.Item>
        <ListGroup.Item>Unidades disponibles: {item.stock}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
         { itemCount 
          ? <Link to='/cart' style={{textDecoration: 'none'}}><Button className='buttongroup' variant="dark" >Check Out</Button></Link>
          :  <ItemCount initial={1} stock={item.stock} title={item.title} img={item.img} onAdd={onAdd}/>
          }
         <Link to='/' style={{textDecoration: 'none'}}><Button variant="outline-secondary" >Volver</Button></Link>
      </Card.Body>
    </Col>
    </Row>
    </Card>
       
        
  </Row>
    

    )

}

export default ItemDetail;