
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';


function Item ({item}) {

return (
    
        
          <Card style={{ width: '18rem' }}>
           <Link to={`/item/${item.id}`}><Card.Img variant="top" src={item.img} /></Link>
          <Card.Body>
            <Link style={{textDecoration: 'none', color: '#333333'}} to={`/item/${item.id}`}><Card.Title className='texto4'>{item.title}</Card.Title></Link>
            <Card.Text className='texto3'>
            <Badge bg="dark">{item.pricetag}</Badge>
            </Card.Text>
          </Card.Body>
        </Card>
        
    
    )

}

export default Item;