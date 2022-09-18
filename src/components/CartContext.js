import {createContext, useState } from "react";

export const CartContext = createContext();


function CartContextProvider ({children}) {

    const [itemsCart, setItemsCart] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    const addItem = (product, quantity) => {
        let isInCart = itemsCart.find((item) => item.id === product.id)
        if(!isInCart) {
            setTotalItems(totalItems + quantity)
            setItemsCart([...itemsCart, product])
        } else {
            setTotalPrice(totalPrice + product.price)
           
        }
     
    }


    const removeItem = (itemId) => {

        setItemsCart( itemsCart.filter (item => item.id !== itemId ))
        setTotalItems(totalItems)
            
    }
 
    const clear = () => {
        setItemsCart([]);
        setTotalItems(0);
        setTotalPrice(0);

    }

  


    return (
    <CartContext.Provider value={{addItem, removeItem, clear, itemsCart, totalItems}}>
     {children}
    </CartContext.Provider>

    );
}

export default CartContextProvider;