import './Comp.css';
import ItemCount from './ItemCount';

function ItemListContainer () {

const onAdd = (qty) => {
    alert('Ha seleccionado'+ ' ' + qty + ' ' + 'prendas')
}

    return (
        
    <ItemCount initial={1} stock={5} onAdd={onAdd} />
    
    )


   }

export default ItemListContainer;



