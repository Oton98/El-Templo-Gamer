//primer bloque

import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { useCarritoContext } from "../../Context/CarritoContext"

export const Cart = () => {

    const {carrito, emptyCart, totalPrice} = useCarritoContext()

    return (
        <>
            {carrito.length === 0
                ? <>
                    <h2> El carrito esta vacío</h2>
                    <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
                </>
                :
                <div className="container cartContainer">
                    <ItemList prods={carrito} plantilla="ItemCart" />
                    <div className="divButtons">
                        <p>Resumen del compra: {totalPrice()} </p>
                        <button className="btn btn-danger" onClick={()=>
                        emptyCart()}>Vaciar Carrito</button>
                    </div>
                    <Link className="nav-link" to={"/"}><button className="btn btn-dark">Continuar Compra</button></Link>
                    <Link className="nav-link" to={"/checkout"}><button className="btn btn-dark">Finalizar Compra</button></Link>
                </div>
            }
        </>
    )

}
