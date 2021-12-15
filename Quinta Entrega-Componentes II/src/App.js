import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return(
    <>
    <NavBar nombre={"Samuel"}/>
    <ItemListContainer/>
    <main></main>
    </>
  )
}

export default App;
