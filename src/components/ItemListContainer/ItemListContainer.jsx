//segundo bloque
import { consultarBDD } from "../../components/utils/funciones.js"
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList.jsx'
export const ItemListContainer = ({ }) => {
    const { idCategoria } = useParams()
    const [productos, setProductos] = useState([])

    useEffect(() => {
        if (idCategoria) {
            consultarBDD('../json/products.json').then(products => {
                const prods = products.filter(prod => prod.idCategoria === idCategoria)
                const items = <ItemList prods={prods} plantilla="Item"/> 
                setProductos(items)
            })
        } else {
            consultarBDD('./json/products.json').then(prods => {
                const items = <ItemList prods={prods} plantilla="Item"/>
                setProductos(items)
            })
        }


    }, [idCategoria])

    return (
        <div className="card-Container">
            {productos}
        </div>
    );
}


