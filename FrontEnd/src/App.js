import './App.css';
import NavBar from './Components/Nav';
import Footer from './Components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './Components/Register';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<h1>Product Listing</h1>} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update" element={<h1>Product Update</h1>} />
          <Route path="/profile" element={<h1> Profile</h1>} />
          <Route path="/logout" element={<h1> Logout</h1>} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  
    <Footer />
    </div>
  );
}

export default App;
