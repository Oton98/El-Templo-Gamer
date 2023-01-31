
import './App.css'; //importacion y ejecución
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { Navbar } from './Navbar/Navbar';


export const App = () => {
  return (
    <div>
      <Navbar nombre={"El Templo Gamer"} />
      <ItemListContainer greeting={"- Hello There - General Kenobi!!!"}/>
    </div>
    
  );
}


