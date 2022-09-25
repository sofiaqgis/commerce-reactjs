
import { useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import './Comp.css';
//import DataFromBD from './ItemsMocks'; 
//import customFetch from './utils/customFetch';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import {db} from './utils/FirebaseConfig';

    
    function ItemDetailContainer () {
        

        const [dato, setDato] = useState({});
        const {idItem} = useParams();

        // useEffect(() => {

        //      customFetch(2000,DataFromBD.find (item => item.id == idItem))
        //         .then(result => setDato(result))
        //         .catch(err => console.log(err))


        // }, [idItem]);
    

  useEffect(() => {
    async function fetchItem() {
     
      const docRef = doc(db, "products", 1);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()) {
        return {
          id: 1,
          ...docSnap.data()
        }

      } else {
        console.log("Error")
      }
    
      setDato(docSnap);
    }

    fetchItem();
  }, [idItem]); 

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