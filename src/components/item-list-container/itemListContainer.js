import { useEffect, useState } from "react";
import { productsAPI } from "../../helpers/PromiseAPI";
import { Item } from "../items/Item";







function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    try {
      const result = await productsAPI;
      setProducts(result);
    } catch (error) {
      console.log(error);
    }
  }


  return <div>

    <p>{selectedItem ? selectedItem.title : "ninguno"}</p>
    <p>{selectedItem ? selectedItem.price : "ninguno"}</p>
    
    {products.map((product) => {
      return <Item key={product.id}
                       {...product}
                       setSelectedItem={setSelectedItem}
      />
    })}
  </div>
}
;

export default ItemListContainer;

