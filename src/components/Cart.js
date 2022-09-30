import { useContext } from 'react';
import { CartContext } from './CartContext';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import './Comp.css';
import { Link } from 'react-router-dom';
import { collection, setDoc, doc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import { db } from './utils/FirebaseConfig';
import Swal from 'sweetalert2/dist/sweetalert2.js';


function Cart () {

    const {itemsCart, subtotal, taxes, totalfinal, totalItems, removeItem, clear} = useContext(CartContext);

    const customOrder = useContext(CartContext);

    const createOrder = async () => {

      let itemsForDB = customOrder.itemsCart.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity
      }) )

      let order = {
        buyer: {
          name: 'Sofia',
          email: 'sofiasofia@gmail.com',
          phone: '123456789'
        },

        date: serverTimestamp(),
        items: itemsForDB,
        total: customOrder.totalfinal
      
      }

      const newOrderRef = doc(collection(db, "orders"))
      await setDoc(newOrderRef, order);

      Swal.fire({
      title: 'Su orden fue creada con el número de pedido:   ',
      text:  newOrderRef.id, 
      color: '#fff'
       
    })

      itemsForDB.map( async (item) => {

        const itemRef = doc(db, "products", item.id);

        await updateDoc(itemRef, {
        stock: increment(-item.quantity)
});

      }
        )

      customOrder.clear();

    }

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
              <Col className="texto2">${item.quantity*item.price}</Col>
              
               <Col>
               <Button onClick={()=>removeItem(item.id, item.quantity)} variant="outline-secondary e22" >Eliminar</Button> 
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
        <Card.Text className='three'>Subtotal: ${subtotal.toFixed(2)}</Card.Text>
        <Card.Text className='three'>Impuestos: ${taxes.toFixed(2)}</Card.Text>
        <Card.Text className="four">Total: ${totalfinal.toFixed(2)}</Card.Text>
        <Card.Text className="buttongroup2"><Button onClick={createOrder} className='buttongroup' variant="outline-dark">Finalizar compra</Button></Card.Text>
      </Card.Body>
    </Card>
    <Button onClick={clear} className='buttongroup' variant="outline-secondary" >Vaciar carrito</Button>
        </Col>
       : <Col className='margin5 texto1'>Tu carrito esta vacío</Col>
}

     </Row>
     

        </>
        
    )
}

export default Cart;