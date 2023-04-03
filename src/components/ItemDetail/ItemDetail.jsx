import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../../Context/CarritoContext";

export const ItemDetail = ({ prod }) => {

    const { addItem } = useCarritoContext()

    const onAdd = (cantidad) => {
        addItem(prod, cantidad)
    }

    return (
        <div>
            <div className="body-card">
                <div className="body-card-image">
                    <img src={prod.img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="body-card-corp">
                    <div className="body-card-corp-text">
                        <div className="body-card-corp-text-detail">
                            <p>{prod.nombre}</p>
                            <p>Modelo: {prod.modelo}</p>
                            <p>Marca: {prod.marca}</p>
                            <p>Precio: ${new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                            <p>Stock: {prod.stock}</p>
                        </div>
                    </div>
                    <div className="body-card-corp-buttons">
                        <ItemCount valInicial={1} stock={prod.stock} onAdd={onAdd} />
                        <Link className="nave-link" to={'/cart'}><button className="btn btn-dark">Finalizar Compra</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );
}
