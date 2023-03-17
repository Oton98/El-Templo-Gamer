import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
//el use ref hace una referencia a una objeto de etiqueta html
//al vincularlo al form, me tira todos input del form
//me ahorra el ID y el useState
export const Checkout = () => {
    let navigate = useNavigate()
    const datosForm = useRef()
    const consultarForm = (e) => {
        e.preventDefault()
        const data = new FormData(datosForm.current) //objeto de formData que me pide de parametro un formulario
        const cliente = Object.fromEntries(data)
        console.log(cliente)
        e.target.reset()
        toast.success("Compra Finalizada")
        navigate("/")


    }
    return (
        <div className="container formCompra">
            <form onSubmit={consultarForm} ref={datosForm} > 
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-compra" name="nombre"  placeholder="Juan Perez"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-compra" name="email"  placeholder="juanperez00@emaildeprueba.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="text" className="form-compra" name="dni"  placeholder="111111111" />
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Telefono/Celular</label>
                    <input type="text" className="form-compra" name="celular"  placeholder="11 1111 1111" />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Direccion</label>
                    <input type="text" className="form-compra" name="direccion" placeholder="Calle 123"/>
                </div>
                <button type="submit" className="btn btn-primary">Realizar Compra</button>
            </form>
        </div>
    );
}

