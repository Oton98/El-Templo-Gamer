import { useState } from "react";
import { toast } from "react-toastify";

export const ItemCount = ({ valInicial, stock, onAdd }) => {

    const [contador, setContador] = useState(valInicial)

    const sumar = () => contador < stock && setContador(contador + 1)
    const restar = () => contador > valInicial && setContador(contador - 1)

    return (
        <div>
            <div className="counter">
                <button className="btn btn-dark" id="btnRestar" onClick={() => restar()}>-</button>
                {contador}
                <button className="btn btn-dark" id="btnAgregar" onClick={() => sumar()}>+</button>
            </div>
            <div className="counter-button">
                <button className="btn btn-light" onClick={() => { onAdd(contador)
                 toast.success('El producto ha sido agregado al carrito.', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    }); }}>Agregar al Carrito</button>
            </div>
        </div>
    );
}

