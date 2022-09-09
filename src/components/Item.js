
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';


function Item ({item}) {

return (
    
        
          <Card style={{ width: '18rem' }}>
           <Link to={`/item/${item.id}`}><Card.Img variant="top" src={item.img} /></Link>
          <Card.Body>
            <Link style={{textDecoration: 'none', color: '#333333'}} to={`/item/${item.id}`}><Card.Title>{item.title}</Card.Title></Link>
            <Card.Text>
             {item.pricetag}
            </Card.Text>
          </Card.Body>
        </Card>
        
    
    )

}

export default Item;