import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { useCarritoContext } from "../../Context/CarritoContext";
export const CartWidget = ({cantCarrito}) => {
    const {getItemQuantity} = useCarritoContext()
    return (
       <>
       <button className="btn btn-dark" ><FontAwesomeIcon icon={faCartShopping} size= "2x"/></button>
        {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
       </>
    );
}


