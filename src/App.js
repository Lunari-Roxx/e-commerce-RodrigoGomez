import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/item-list-container/itemListContainer';
import ItemDetailContainer from './components/items/ItemDetailContainer'
import Routes from './components/routes/Routes';

function App() {

  
  
  return (
    <div className="App">
     {/**<ItemListContainer/>*/} 
     <Routes />

      
    </div>
  );
}

export default App;
