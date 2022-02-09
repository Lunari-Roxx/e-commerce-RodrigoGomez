import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { Item } from "../items/Item";







function ItemListContainer() {

  
  const {id} = useParams();
  const { products } = useProducts();
  

  const filterProducts = products.filter(({category}) => category === id);

  

  


  return <div>

    
    {!id && products.map((product) => {
      
      return <Item key={product.id}
                       {...product}
      />
    })}

{id && filterProducts.map((product) => {
      return <Item key={product.id}
                       {...product}
      />
    })}
    


  </div>
}
;

export default ItemListContainer;

