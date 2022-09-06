
import { useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import './Comp.css';
import getItem from './utils/getItem';
import DataFromBD from './ItemsMocks'; 

    
    function ItemDetailContainer () {
        

        const [dato, setDato] = useState({});

        useEffect(() => {
            getItem(2000, DataFromBD [7])
            .then(result => setDato(result))
            .catch(err => console.log(err))
        }, []);
    
     


   return (
    
   
    <ItemDetail item={dato}/>
  )


   }

export default ItemDetailContainer;