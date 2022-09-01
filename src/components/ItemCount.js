import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function ItemCount ({initial, stock, onAdd}) {

 
    const[rate, setRate] = useState(initial);

    const handleClickA = () => {
        setRate(rate+1); 
    }
    
    const handleClickB = () => {
        setRate(rate-1); 
    }
    
        
      return (
        <>
         <ButtonGroup className='buttongroup' aria-label='Basic example'>
        <Button className='button1' variant='secondary' disabled={rate <= initial} onClick={handleClickB}>-</Button>
        <span className='texto'>{rate}</span>
        <Button className='button1' variant="secondary"  disabled={rate >= stock} onClick={handleClickA}>+</Button>
    </ButtonGroup>
    <Button variant='dark' disabled={stock <= 0} onClick={()=>onAdd(rate)}>Agregar al Carrito</Button>
        
        </>
    )


  }
  
  export default ItemCount;


