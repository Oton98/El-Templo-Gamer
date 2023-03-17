//primer bloque

import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"

export const Cart = () => {
    const carrito = [{
        id: 1,
        cant: 5,
        idCategoria: "Celulares",
        nombre: "Smarthphone",
        marca: "Samsung",
        modelo: "A 04",
        precio: 50000,
        stock: 20,
        img: "samsungA04.jpg"
    },
    {
        id: 1,
        cant: 5,
        idCategoria: "Celulares",
        nombre: "Smarthphone",
        marca: "Samsung",
        modelo: "A 04",
        precio: 50000,
        stock: 20,
        img: "samsungA04.jpg"
    },
    {
        id: 1,
        cant: 5,
        idCategoria: "Celulares",
        nombre: "Smarthphone",
        marca: "Samsung",
        modelo: "A 04",
        precio: 50000,
        stock: 20,
        img: "samsungA04.jpg"
    }
    ]

    return (
        <>
            {carrito.length === 0
                ? <>
                    <h2> el carrtio esta vacio</h2>
                    <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
                </>
                :
                <div className="container cartContainer">
                    <ItemList prods={carrito} plantilla="ItemCart" />
                    <div className="divButtons">
                        <p>Resumen del compra: PrecioTotal</p>
                        <button className="btn btn-danger" onClick={()=>
                        console.log("Productos Eliminados")}>Vaciar Carrito</button>
                    </div>
                    <Link className="nav-link" to={"/"}><button className="btn btn-dark">Continuar Compra</button></Link>
                    <Link className="nav-link" to={"/checkout"}><button className="btn btn-dark">Finalizar Compra</button></Link>
                </div>
            }
        </>
    )

}
