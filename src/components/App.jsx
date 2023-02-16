
import './App.css'; //importacion y ejecución
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { Navbar } from './Navbar/Navbar';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar nombre={"El Templo Gamer"} />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:idCategoria' element={<ItemListContainer />}/>
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </>

  );
}


