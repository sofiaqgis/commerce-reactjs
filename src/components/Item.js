import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Item ({item}) {

return (
    
        <>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
             {item.pricetag}
            </Card.Text>
            <Button variant="dark">Agregar al carrito</Button>
          </Card.Body>
        </Card>
        </>
    
    )

}

export default Item;