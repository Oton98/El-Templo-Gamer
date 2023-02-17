import { Link } from "react-router-dom";

export const Item = ({ item }) => {
    return (
        <div className="card">
            <img src={`/img/${item.img}`} className="card-img-top" alt={`imagen de ${item.marca} ${item.modelo}`} />
            <div className="card-body">
                <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                <p className="card-text">{item.marca}</p>
                <p className="card-text">${item.precio}</p>
                <Link className="nav-link" to={`/item/${item.id}`}><button className="btn btn-dark">Ver Producto</button></Link>
            </div>
        </div>
    );
}

