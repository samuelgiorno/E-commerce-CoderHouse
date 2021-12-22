import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Navbar/>         
        </header>
        <div className="body">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12">        
              <ItemListContainer />
            </div>
            <div className="col-12">
              <ItemDetailContainer />
            </div>
          
          </div>
        </div>
        </div>
  </div>
  );
}

export default App;
