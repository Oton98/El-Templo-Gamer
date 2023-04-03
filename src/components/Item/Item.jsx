import { Link } from "react-router-dom";
import { useUserDarkModeContext } from "../../Context/DarkModeContext";

export const Item = ({ item }) => {

    const {darkMode} = useUserDarkModeContext()

    return (
        <div className="card">
            <img src={item.img} className="card-img-top" alt={`imagen de ${item.marca} ${item.modelo}`} />
            <div className="card-body">
                <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                <p className="card-text">{item.marca}</p>
                <p className="card-text">${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <Link className="nav-link" to={`/item/${item.id}`}><button className="btn btn-dark">Ver Producto</button></Link>
            </div>
        </div>
    );
}

