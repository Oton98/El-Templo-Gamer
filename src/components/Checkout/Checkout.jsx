import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCarritoContext } from "../../Context/CarritoContext";
import { Link } from "react-router-dom";
import { createOrdenCompra, updateProducto, getProducto } from "../utils/firebase";

export const Checkout = () => {
    const { carrito, emptyCart, totalPrice } = useCarritoContext();
    const navigate = useNavigate();
    const datosForm = useRef();

    const consultarForm = async (e) => {
        e.preventDefault();

        const data = new FormData(datosForm.current);
        const cliente = Object.fromEntries(data);

        // Actualizar el stock de cada producto en la base de datos
        for (const prodCarrito of carrito) {
            const prodBDD = await getProducto(prodCarrito.id);
            prodBDD.stock -= prodCarrito.cant;
            await updateProducto(prodBDD.id, prodBDD);
        }

        // Crear la orden de compra en la base de datos
        const ordenCompra = await createOrdenCompra(
            cliente,
            carrito,
            totalPrice(),
            new Date().toISOString()
        );

        // Mostrar un mensaje de éxito al usuario
        toast.success(`Orden de compra concretada por el total de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())}, el id es ${ordenCompra.id}`);

        // Vaciar el carrito y redirigir al usuario a la página de inicio
        datosForm.current.reset();
        emptyCart();
        navigate("/");
    }

    return (
        <>
            {carrito.length === 0
                ?
                <>
                    <h2> El carrito esta vacío</h2>
                    <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
                </>
                :
                <div className="container formCompra">
                    <form onSubmit={consultarForm} ref={datosForm} >
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                            <input type="text" className="form-compra" name="nombre" placeholder="Juan Perez" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-compra" name="email" placeholder="juanperez00@emaildeprueba.com" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dni" className="form-label">DNI</label>
                            <input type="text" className="form-compra" name="dni" placeholder="111111111" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="celular" className="form-label">Telefono/Celular</label>
                            <input type="tel" className="form-compra" name="celular" placeholder="11 1111 1111" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Direccion</label>
                            <input type="text" className="form-compra" name="direccion" placeholder="Calle 123" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Realizar Compra</button>
                    </form>
                </div>
            }</>
    );
}