import {consultarBDD} from "../../components/utils/funciones.js"
import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'
import {ItemList} from '../ItemList/ItemList.jsx'
export const ItemListContainer = ({}) => {
    const {idCategoria} = useParams()
    const [productos, setProductos] = useState([])
    console.log(idCategoria)
    
    useEffect(() => {
        if (idCategoria){
            consultarBDD('../json/products.json').then(products => {
                const prods = products.filter(prod => prod.idCategoria === parseInt(idCategoria))
                const items = ItemList({ prods })
                setProductos(items)
            })
        } else {
            consultarBDD('./json/products.json').then(prods => {
                const items = ItemList({ prods })
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


