import {createContext, useState } from "react";

export const CartContext = createContext();


function CartContextProvider ({children}) {

    const [itemsCart, setItemsCart] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
   
    


    const addItem = (product, qty) => {
        let isInCart = itemsCart.find((item) => item.id === product.id)
        if(!isInCart) {
            itemsCart.map(product => {
                setItemsCart([...itemsCart, {product, quantity: qty} ])
            })
            setTotalItems(totalItems + qty)
            setItemsCart([...itemsCart, product])
            
        } else {
            itemsCart.map(product => {
                setItemsCart([...itemsCart, {product, quantity: product.quantity + qty} ])
            })
            setTotalItems(totalItems + qty)
           
        }
        console.log(itemsCart)
     
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