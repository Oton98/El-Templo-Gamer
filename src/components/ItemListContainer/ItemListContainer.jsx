import {consultarBDD} from "../../components/utils/funciones.js"
import {useState, useEffect} from 'react'
import {ItemList} from '../ItemList/ItemList.jsx'
export const ItemListContainer = ({}) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        
        consultarBDD('./json/products.json').then(prods => {
            const items = ItemList({prods})
            setProductos(items)
        })
        
    }, [])

    return (
        <>
        {productos}
        </>
    );
}


