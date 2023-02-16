import { Link } from "react-router-dom";
export const Categorias = () => {
    return (

        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <button className="btn btn-dark">Productos PC</button>
            </a>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={'/category/10'}>Microprocesadores</Link></li>
                <li><Link className="dropdown-item" to={'/category/11'}>Motherboards</Link></li>
                <li><Link className="dropdown-item" to={'/category/12'}>Almacenamiento</Link></li>
                <li><Link className="dropdown-item" to={'/category/13'}>Memoria RAM</Link></li>
                <li><Link className="dropdown-item" to={'/category/14'}>Placas de video</Link></li>
            </ul>
        </li>

    );
}


