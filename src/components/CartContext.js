import {createContext, useState } from "react";

export const CartContext = createContext();


function CartContextProvider ({children}) {

    const [itemsCart, setItemsCart] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItem = (product, qty) => {
        let isInCart = itemsCart.find((item) => item.id === product.id)
        if(!isInCart) {
            setTotalItems(totalItems + qty)
            setItemsCart([...itemsCart, product])
        } else {
            setTotalPrice(totalPrice + product.price)
        }

    }

    const removeItem = () => {

    }

    const clear = () => {

    }

  


    return (
    <CartContext.Provider value={{addItem, removeItem, clear, itemsCart}}>
     {children}
    </CartContext.Provider>

    );
}

export default CartContextProvider;