import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



function ItemCount ({initial, stock, onAdd}) {

 
    const[amount, setAmount] = useState(initial);

    const Increment = () => {
        setAmount(amount+1); 
    }
    
    const Decrement = () => {
        setAmount(amount-1); 
    }
    
        
      return (
        <>
         <ButtonGroup className='buttongroup' aria-label='Basic example'>
        <Button className='button1' variant='dark' disabled={amount <= initial} onClick={Decrement}>-</Button>
        <span className='texto'> {amount} </span>
        <Button className='button1' variant="dark"  disabled={amount >= stock} onClick={Increment}>+</Button>  
        </ButtonGroup>
       <Button variant='dark' disabled={stock <= 0} onClick={()=>onAdd(amount)}>Agregar al Carrito</Button>
      
         </>
        
        
    )


  }
  
  export default ItemCount;


