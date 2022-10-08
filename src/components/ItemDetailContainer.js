
import { useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import './css/Comp.css';
import { useParams } from 'react-router-dom';
import { firestoreFetchOne} from './utils/firestoreFetch'


    
    function ItemDetailContainer () {
        

        const [dato, setDato] = useState({});
        const {id} = useParams();


        useEffect(() => {
          firestoreFetchOne(id)
          .then(result => setDato(result))
          .catch(err => console.log(err))
        }, [id]);
 
   return (
    
   
    <ItemDetail item={dato}/>
  )


   }

export default ItemDetailContainer;