
import './App.css'; //importacion y ejecución
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { Navbar } from './Navbar/Navbar';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';

export const App = () => {
  return (
    <div>
      <Navbar nombre={"El Templo Gamer"} />
      <ItemListContainer/>
      <ItemDetailContainer/>

    </div>

  );
}


