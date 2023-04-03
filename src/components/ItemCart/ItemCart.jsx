//cuarto bloque
import { useCarritoContext } from "../../Context/CarritoContext";
export const ItemCart = ({ item }) => {
  const { id, cant, nombre, modelo, precio, img } = item;
  const { removeItem } = useCarritoContext()
  return (
    <div className="itemcard">
      <div className="itemcard-img">
        <img src={img} alt={`Imagen de ${nombre}`} />
      </div>
      <div className="itemcard-text">
        <h5>
          {nombre} {modelo}
        </h5>
        <p>Cantidad: {cant}</p>
        <p>Precio Unitario: ${new Intl.NumberFormat('de-DE').format(precio)}</p>
        <p>Subtotal: ${new Intl.NumberFormat('de-DE').format(cant * precio)}</p>
        <div>
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
  );
};

