//cuarto bloque
import { useCarritoContext } from "../../Context/CarritoContext";
export const ItemCart = ({ item }) => {
    const {id, cant, nombre, modelo, precio, img } = item;
    const {removeItem} = useCarritoContext()
    return (
      <div className="card mb-3 cardCart">
        <div className="rows g-0">
          <div className="col-md-4">
            <img src={img} alt={`Imagen de ${nombre}`} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {nombre} {modelo}
              </h5>
              <p className="card-text">Cantidad: {cant}</p>
              <p className="card-text">Precio Unitario: {precio}</p>
              <p className="card-text">Subtotal: {cant * precio}</p>
              <button
                className="btn btn-danger"
                onClick={() => removeItem(id)}
              >
                {" "}
                Borrar producto del carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

