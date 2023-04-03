import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { useCarritoContext } from "../../Context/CarritoContext";
import { Link } from "react-router-dom";
export const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    return (
       <>
       <Link className="nav-link" to={"/cart"}><button className="btn btn-dark" ><FontAwesomeIcon icon={faCartShopping} size= "2x"/></button></Link>
        {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
       </>
    );
}


