import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/item-list-container/itemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer/>
    </div>
  );
}

export default App;
