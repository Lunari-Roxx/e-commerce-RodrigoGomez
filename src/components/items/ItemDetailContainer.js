import { useEffect, useState } from "react";
import { item } from "../../helpers/PromiseAPI";
import { ItemDetail } from "./ItemDetail";




 const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([]);

    useEffect(() => {
      
        getItem();
      
    }, []);

    const getItem = async () => {
        try {
            const result = await item;
            setDetail(result);
            console.log(detail);
            console.log(result)
            
        } catch (error) {
            console.log({error})
        }
    }
    

    return(
        <>
        
        <ItemDetail key={detail.id} {...detail}/>
        </>
        
        
    )

}

export default ItemDetailContainer ;
