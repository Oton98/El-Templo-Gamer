import { CartWidget } from "../CartWidget/CartWidget";
import { Categorias } from "./Categorias/Categorias";
import { Secciones } from "./Secciones/Secciones";

export const Navbar = ({ nombre }) => {
    return (
   
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{nombre}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <Secciones/>
        <Categorias/>
      </ul>
     <CartWidget cantCarrito={10}/>
    </div>
  </div>
</nav>



    );
}


