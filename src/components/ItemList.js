
import Row from 'react-bootstrap/Row';
import { useEffect, useState} from 'react';
import './Comp.css';
import customFetch from './utils/customFetch';
import Spinner from 'react-bootstrap/Spinner';
import Item from './Item';
import Col from 'react-bootstrap/Col';
import DataFromBD from './ItemsMocks';

function ItemList () {

    const [data, setData] = useState([]);


    useEffect(() => {
        customFetch(2000, DataFromBD)
        .then(datos => setData(datos))
        .catch(err => console.log(err))
    }, []);


   return (
    <>
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
    {
    data.length ?
    data.map(item => ( 
      <>
      <Col>
       <Item item={item}/> 
      </Col>
      </>
    
    )) : 
      <Row className="row">
    <div className="col"><Spinner animation="border" role="status"></Spinner></div> </Row>
    
    } 
    </Row>
  </>
  )
}


export default ItemList;