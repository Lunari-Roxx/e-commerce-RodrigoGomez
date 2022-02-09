import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsAPI } from "../../helpers/PromiseAPI";
import { Item } from "../items/Item";







function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const {id} = useParams();
  console.log({id})

  const filterProducts = products.filter(({category}) => category === id);

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
    
    {!id && products.map((product) => {
      return <Item key={product.id}
                       {...product}
                       setSelectedItem={setSelectedItem}
      />
    })}

{id && filterProducts.map((product) => {
      return <Item key={product.id}
                       {...product}
                       setSelectedItem={setSelectedItem}
      />
    })}
    


  </div>
}
;

export default ItemListContainer;

