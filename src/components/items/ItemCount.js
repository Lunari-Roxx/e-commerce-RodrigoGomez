import { useState } from "react";

export const ItemCount = ({stock , initial}) => {

    const [quantity, setQuantity] = useState(initial);

    

        const subsCount = () => {
            if(quantity > 0){
                setQuantity(quantity - 1);

            }
        }

        const sumCount = () =>{
            if(quantity < stock){
                setQuantity(quantity + 1);

            }
        }

        const onAdd = () =>{
            if(quantity > 0){
                document.querySelector("#selectedQuantity").innerHTML = quantity;
            }
        }


    return <div>
        <p>Seleccione cantidad de productos</p>
        <button onClick={subsCount}>-</button>
        <span>{quantity}</span>
        <button onClick={sumCount}>+</button>
        <br/>
        
        
        
    </div>
};
