import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';



function App() {
  return (
   
    <BrowserRouter>
    <CartContextProvider>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/category/:idCategory' element={<ItemListContainer/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
    </CartContextProvider>
    </BrowserRouter>
    

  );
}


export default App;
