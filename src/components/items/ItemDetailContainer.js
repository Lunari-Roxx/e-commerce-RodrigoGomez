import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { ItemDetail } from "./ItemDetail"; // lo voy a utilizar cuando repare el error de SelectedItem




 const ItemDetailContainer = () => {

    const {products} = useProducts();
    const {id} = useParams();
    const [selectedItem, setSelectedItem] = useState(null);
    
    useEffect(() => {
      if(products.length  > 0){
        const selectedProduct = products.find((product) => product.id === id);
        setSelectedItem(selectedProduct);
        
      }
    }, [products])
    
    
    

    return(
        <>
        <h1>aca va el detalle</h1>

        {/*<ItemDetail key={selectedItem.id} {...selectedItem}/>*/}
        </>
        
        
    )

}

export default ItemDetailContainer ;
