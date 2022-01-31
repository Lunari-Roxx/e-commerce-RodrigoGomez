
import ItemCount from "../items/ItemCount"


const GreetingItem = ({greeting}) => {
  return <div>
            <h1>Bienvenido {greeting.name} !</h1>
            <ItemCount stock={5} initial={1}/>
        </div>
};

export default GreetingItem;
