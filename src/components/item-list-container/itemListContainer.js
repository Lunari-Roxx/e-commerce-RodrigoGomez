import GreetingItem from "../greeting-item/GreetingItem";


const user = {name : "Jose" ,
              age : 22};

function ItemListContainer(){
    return  <div>
                <GreetingItem greeting={user}/>
            </div>
}
;

export default ItemListContainer;

