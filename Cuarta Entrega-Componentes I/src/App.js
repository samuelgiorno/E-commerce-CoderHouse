import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return(
    <>
    <NavBar nombre={"Samuel"} edad={1}/>
    <ItemListContainer greeting="Soy el Contenedor ItemListContainer"/>
    <main>Main de la web</main>
    </>
  )
}

export default App;
