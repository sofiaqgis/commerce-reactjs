import {db} from './FirebaseConfig';
import {query, where, collection, getDocs} from "firebase/firestore";
import {doc, getDoc} from 'firebase/firestore';


export const firestoreFetchTwo = async (idCategory) => {

    let q;
  
    if(idCategory) {
       
      q = query(collection(db, "products"), where ("idCategory", "==" , idCategory))
    
    } else {
      q = query(collection(db, "products"));
    }
       
      const itemCollection = await getDocs(q);
       const dataFromFirestore = itemCollection.docs.map (item => ({
         id: item.id,
         ...item.data()
       }))
       return dataFromFirestore;
    }

export const firestoreFetchOne = async (id) => {
     
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
          return {
            id: id,
            ...docSnap.data()
          }
  
        } else {
          console.log("Error")
        }
      
    }








  
