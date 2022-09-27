
import Row from 'react-bootstrap/Row';
import { useEffect, useState} from 'react';
import './Comp.css';
//import customFetch from './utils/customFetch';
import Spinner from 'react-bootstrap/Spinner';
import Item from './Item';
import Col from 'react-bootstrap/Col';
//import DataFromBD from './ItemsMocks';
import { useParams } from 'react-router-dom';
import { firestoreFetchTwo} from './utils/firestoreFetch'


function ItemList () {

  const [data, setData] = useState([]);
  const {idCategory} = useParams();


  useEffect(() => {
    firestoreFetchTwo(idCategory)
    .then(result => setData(result))
    .catch(err => console.log(err))
  }, [idCategory]);


    // useEffect(() => {

    //   if(idCategory) {
    //     customFetch(2000, DataFromBD.filter (item => item.idCategory == idCategory))
    //     .then(datos => setData(datos))
    //     .catch(err => console.log(err))

    //   } else {
    //     customFetch(2000, DataFromBD)
    //     .then(datos => setData(datos))
    //     .catch(err => console.log(err))

    //   }

    // }, [idCategory]);


   return (
    
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
    {
    data.length ?
    data.map(item => ( 
      <>
      <Col className="columna-4">
       <Item item={item}/> 
      </Col>
      </>
    
    )) : 
      <Row className="marginRow">
    <Col className="margin"><Spinner animation="border" role="status"></Spinner></Col> </Row>
    
    } 
    </Row>
  
  )
}


export default ItemList;