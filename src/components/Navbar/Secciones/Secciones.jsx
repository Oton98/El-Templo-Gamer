import { Link } from "react-router-dom";
import React from "react";

export const Secciones = React.memo(() => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link" to={'/'}><button className="btn btn-dark">Inicio</button></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'/category/6'}><button className="btn btn-dark">Televisores</button></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'/category/7'}><button className="btn btn-dark">Muebles</button></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'/category/Celulares'}><button className="btn btn-dark">Celulares</button></Link>
            </li>
        </>
    );
})

