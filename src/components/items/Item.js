import {ItemCount} from "./ItemCount";

//props id,title,price,pictureURL, stock
export const Item = ({title,price,pictureURL,stock}) => {

    return(
        
        <>
            <div>
                <h2>Nombre del producto : {title}</h2>
                <h2>Precio : {price}</h2>
                <img src={pictureURL} width="300px" alt="Imagen del producto"/>
                <ItemCount stock={stock} initial = {0}/>
                <hr/>
            </div>
        </>
    )

}
