import 'react-toastify/dist/ReactToastify.css';
import './App.css'; //importacion y ejecución

//React Routes
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Componentes
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { Navbar } from './Navbar/Navbar';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './Checkout/Checkout';
import { Cart } from './Cart/Cart';

//Toastify
import { ToastContainer } from 'react-toastify';

//Context
import { DarkModeProvider } from '../Context/DarkModeContext';



export const App = () => {
  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <Navbar nombre={"El Templo Gamer"} />
          <ToastContainer />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </DarkModeProvider>
      </BrowserRouter>
    </>

  );
}


