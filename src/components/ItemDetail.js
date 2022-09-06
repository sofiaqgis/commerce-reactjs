
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


function ItemDetail ({item}) {

    const onAdd = (qty) => {
        alert('Ha seleccionado'+ ' ' + qty + ' ' + 'prendas')
    }


    return (
        <>
   <Row className="justify-content-center">
    <Card style={{ width: '68rem', margin: '4rem' }}>
    <Row className="justify-content-center">
   <Col >
    <Card.Img variant="top" className="img-fluid detail" src={item.img} />
    </Col>
    <Col>
      <Card.Body>
        <br></br>
        <Card.Title className="text-center">{item.title}</Card.Title>
        <br></br>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Color: {item.color}</ListGroup.Item>
        <ListGroup.Item>Estilo: {item.style}</ListGroup.Item>
        <ListGroup.Item>Estampa: {item.print}</ListGroup.Item>
        <ListGroup.Item>Unidades disponibles: {item.stock}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
         <ItemCount initial={1} stock={item.stock} onAdd={onAdd} /> 
         <Button style={{ margin: '2rem' }} variant="dark">Volver</Button>
      </Card.Body>
    </Col>
    </Row>
    </Card>
       
        
  </Row>
    </>

    )

}

export default ItemDetail;