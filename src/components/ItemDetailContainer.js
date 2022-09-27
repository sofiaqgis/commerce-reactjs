
import { useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import './Comp.css';
//import DataFromBD from './ItemsMocks'; 
//import customFetch from './utils/customFetch';
import { useParams } from 'react-router-dom';
import { firestoreFetchOne} from './utils/firestoreFetch'


    
    function ItemDetailContainer () {
        

        const [dato, setDato] = useState({});
        const {id} = useParams();

        // useEffect(() => {

        //      customFetch(2000,DataFromBD.find (item => item.id == idItem))
        //         .then(result => setDato(result))
        //         .catch(err => console.log(err))


        // }, [idItem]);
    

        useEffect(() => {
          firestoreFetchOne(id)
          .then(result => setDato(result))
          .catch(err => console.log(err))
        }, [id]);
    

//   useEffect(() => {
//        async function fetchItem() {

// const docRef = doc(db, "products", "3");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
 
//   return {
//              id: 3,
//             ...docSnap.data()
//            }
// } else {
  
//   console.log("No such document!");
// }
//        }fetchItem();
//       }, [3])
      

   return (
    
   
    <ItemDetail item={dato}/>
  )


   }

export default ItemDetailContainer;