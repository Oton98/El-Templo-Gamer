export const Categorias = () => {
    return (

        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos PC</a>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Microprocesadores</a>
                <a className="dropdown-item" href="#">Motherboards</a>
                <a className="dropdown-item" href="#">Almacenamiento</a>
                <a className="dropdown-item" href="#">Memoria RAM</a>
                <a className="dropdown-item" href="#">Placas de video</a>
            </div>
        </li>

    );
}


