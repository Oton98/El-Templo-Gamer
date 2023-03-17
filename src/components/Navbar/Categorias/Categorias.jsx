import { Link } from "react-router-dom";
import React from "react";
export const Categorias = React.memo(() => {
    return (

        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <button className="btn btn-dark">Productos PC</button>
            </a>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={'/category/Microprocesadores'}>Microprocesadores</Link></li>
                <li><Link className="dropdown-item" to={'/category/Motherboards'}>Motherboards</Link></li>
                <li><Link className="dropdown-item" to={'/category/Memoria'}>Almacenamiento</Link></li>
                <li><Link className="dropdown-item" to={'/category/Ram'}>Memoria RAM</Link></li>
                <li><Link className="dropdown-item" to={'/category/PlacaDeVideos'}>Placas de video</Link></li>
            </ul>
        </li>

    );
})

