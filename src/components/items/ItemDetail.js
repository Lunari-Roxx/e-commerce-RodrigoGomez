


export const ItemDetail = ({description, pictureURL, price , name}) => {

    

    return(
        <>

        <p>{name}</p>
        <img src={pictureURL} alt="imagen del producto" width="300px" />
        <p>{description}</p>
        <p>{price}</p>
        </>
    )

}