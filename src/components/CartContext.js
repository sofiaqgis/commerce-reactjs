import {createContext, useState } from "react";

export const CartContext = createContext();


function CartContextProvider ({children}) {

    const [itemsCart, setItemsCart] = useState([]);
    const [totalItems, setTotalItems] = useState(0);

   
    


    const addItem = (item, qty) => {
        let isInCart = itemsCart.find(product => product.id === item.id);
        if(!isInCart) {

            setItemsCart([
                    ...itemsCart, 
                  
                    { 
                    id: item.id,
                    img: item.img,
                    title: item.title,
                    quantity: item.quantity + qty,
                    price: item.price,
                    pricetag: item.pricetag,
                    stock: item.stock
                } ]
            )
            setTotalItems(totalItems + qty)
        
     
                
            } else {
            setTotalItems(totalItems + qty)
            isInCart.quantity += qty
            setItemsCart([...itemsCart])

        }
        
    }
    

const removeItem = (itemId) => {

        setItemsCart( itemsCart.filter (item => item.id !== itemId ))
    
            
    }

 
    const clear = () => {
        setItemsCart([]);
        setTotalItems(0);
 
    

    }

  


    return (
    <CartContext.Provider value={{addItem, removeItem, clear, itemsCart, totalItems}}>
     {children}
    </CartContext.Provider>

    );

}
export default CartContextProvider;