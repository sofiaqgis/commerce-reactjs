
import Row from 'react-bootstrap/Row';
import { useEffect, useState} from 'react';
import './Comp.css';
//import customFetch from './utils/customFetch';
import Spinner from 'react-bootstrap/Spinner';
import Item from './Item';
import Col from 'react-bootstrap/Col';
//import DataFromBD from './ItemsMocks';
import { useParams } from 'react-router-dom';
import { query, where, collection, getDocs } from "firebase/firestore";
import {db} from './utils/FirebaseConfig';


function ItemList () {

  const [data, setData] = useState([]);
  const {idCategory} = useParams();


  useEffect(() => {
    async function fetchProduct(idCategory) {

  let q;

  if(idCategory) {

    q = query(collection(db, "products"), where ('idCategory', '==' , idCategory));
  } else {
    q = query(collection(db, "products"));
  }
     
    const itemCollection = await getDocs(q);
     const dataFromFirestore = itemCollection.docs.map (item => ({
       id: item.id,
       ...item.data()
     }))
      setData(dataFromFirestore);
    }

    fetchProduct();
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