import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemsListContainer greeting="Bienvenido Usuari@"/>
    </div>
  );
}

export default App;
