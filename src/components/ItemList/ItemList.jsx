//tercer bloque
import { Item } from "../Item/Item";
import { ItemCart } from "../ItemCart/ItemCart";

export const ItemList = ({prods, plantilla}) => {
    
    return (
        <>
        {
            plantilla === "Item"
            ?
            prods.map(producto => <Item item ={producto}/>)
            :
            prods.map(producto => <ItemCart item ={producto}/>)
        }
            
        </>
    );
}