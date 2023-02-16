import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { consultarBDD } from "../utils/funciones";
import { ItemDetail } from "../ItemDetail/ItemDetail";
export const ItemDetailContainer = () => {
    const {id} = useParams()
    const [producto, setProductos] = useState([])

    useEffect (() =>{
        consultarBDD('../json/products.json').then(prods => {
            const prod = prods.find(item => item.id === parseInt(id))
            setProductos(prod)
        })
    })

    return (
        <div>
            <ItemDetail prod={producto}/>
        </div>
    );
}
