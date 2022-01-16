import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { CartContextProvider } from './context/CartContext/CartContext';
import Cart from './components/Cart/Cart'


function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <Router>
          <header className="App-header">
            <Navbar/>         
          </header>
          <div className="bgBody">
            <div className="container">
              <Routes>
                <Route exact path='/' element={<ItemListContainer />} />
                <Route exact path='/category/:categoryId' element={<ItemListContainer />}/>
                <Route exact path='/detail/:productId' element={<ItemDetailContainer />}/> 
                <Route exact path='/cart' element={<Cart/>} />     
              </Routes> 
            </div> 
          </div>
        </Router>
      </CartContextProvider>
  </div>
  );
}

export default App;