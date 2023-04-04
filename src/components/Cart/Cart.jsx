//primer bloque

import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { useCarritoContext } from "../../Context/CarritoContext"

export const Cart = () => {

    const { carrito, emptyCart, totalPrice } = useCarritoContext()

    return (
        <>
            {carrito.length === 0
                ? <>
                    <h2> El carrito esta vacío</h2>
                    <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
                </>
                :
                <div className="container cartContainer">
                    <div className="cart-Title">
                        <h1>Productos en el Carrito</h1>
                    </div>
                    <div className="contenedor">
                        <ItemList prods={carrito} plantilla="ItemCart" />
                    </div>
                    <div className="contenedor-resumen">
                        <div className="divButtons contenedor-resumen-text">
                            <p>Resumen del compra: ${new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                        </div>
                        <div className="contenedor-resumen-buttons">
                            <button className="btn btn-danger" onClick={() =>
                                emptyCart()}>Vaciar Carrito</button>
                            <Link className="nav-link" to={"/"}><button className="btn btn-dark">Continuar Compra</button></Link>
                            <Link className="nav-link" to={"/checkout"}><button className="btn btn-dark">Finalizar Compra</button></Link>
                        </div>
                    </div>
                </div>
            }
        </>
    )

}
