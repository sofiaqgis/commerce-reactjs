import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState} from 'react';
import './Comp.css';
import customFetch from './utils/customFetch';
import dataFromBD from './Item';
import Spinner from 'react-bootstrap/Spinner';

function ItemList () {

    const [data, setData] = useState([]);


    useEffect(() => {
        customFetch(2000, dataFromBD)
        .then(datos => setData(datos))
        .catch(err => console.log(err))
    }, []);


   return (
    <>
    <Row xs={1} md={4} className="g-4">
    {
    data.length ?
    data.map(item => (
     <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
         {item.price}
        </Card.Text>
        <Button variant="dark">Agregar al carrito</Button>
      </Card.Body>
    </Card>
    </Col>
    )) : 
    <div className="col-md-12 d-flex align-items-center justify-content-center min-vh-90">
    <Spinner animation="border" role="status"></Spinner></div>
    
    } 
    </Row>
  </>
  )
}


export default ItemList;