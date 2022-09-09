
import { useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import './Comp.css';
import DataFromBD from './ItemsMocks'; 
import customFetch from './utils/customFetch';
import { useParams } from 'react-router-dom';

    
    function ItemDetailContainer () {
        

        const [dato, setDato] = useState({});
        const {idItem} = useParams();

        useEffect(() => {

             customFetch(2000,DataFromBD.find (item => item.id == idItem))
                .then(result => setDato(result))
                .catch(err => console.log(err))


        }, [idItem]);
    
     


   return (
    
   
    <ItemDetail item={dato}/>
  )


   }

export default ItemDetailContainer;