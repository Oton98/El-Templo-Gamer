import { useState, useEffect} from "react";
import { consultarBDD } from "../utils/funciones";
import { ItemDetail } from "../ItemDetail/ItemDetail";
export const ItemDetailContainer = () => {

    const [producto, setProductos] = useState([])

    useEffect (() =>{
        consultarBDD('../json/products.json').then(prods => {
            const prod = prods.find(item => item.id === 1)
            setProductos(prod)
        })
    })

    return (
        <div>
            <ItemDetail prod={producto}/>
        </div>
    );
}
