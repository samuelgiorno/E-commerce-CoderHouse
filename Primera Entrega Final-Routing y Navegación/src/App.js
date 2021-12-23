import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//import Banner from './components/Banner/banner';


function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar/>         
        </header>
        <div className="body">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <Routes>
                <Route exact path='/' element={<ItemListContainer />} />
                <Route exact path='/category/:categoryId' element={<ItemListContainer />}/>
                <Route exact path='/detail/:productId' element={<ItemDetailContainer />}/>        
              </Routes> 
            </div> 
          </div>
        </div>
      </Router>
  </div>
  );
}

export default App;
