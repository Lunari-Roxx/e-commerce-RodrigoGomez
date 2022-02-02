import { useEffect, useState } from "react";
import { productsAPI } from "../../helpers/PromiseAPI";
import {Item} from "../items/Item";





              

function ItemListContainer(){
    
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getProducts();
      }, [])
    
        const getProducts = async () =>{
          try {
            const result = await productsAPI;
            setProducts(result);
          } catch (error) {
            console.log(error);
          }
        }


    return  <div>
                {products.map((product) => {
                  return  <Item key={product.id} {...product}/>
                })}
            </div>
}
;

export default ItemListContainer;

