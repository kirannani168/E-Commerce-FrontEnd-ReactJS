import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NAvBar from './Components/NAvBar';
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import ShopContextProvider from './Context/ShopContext';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <NAvBar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
