import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom'
import Menu from "./pages/Menu"
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import data from "./data/data";
import { useState } from "react";
import Login from "./pages/Login";
import Thankyou from "./pages/Thankyou";
import SignUp from "./pages/Signup";

function App() {
  const products = data;
  
  const [cartItems, setCartItems] = useState([]);
  
  const handleAddProduct = (product) =>{
    const productExist =  cartItems.find((item) => item.id === product.id);
    if(productExist){
      setCartItems(cartItems.map((item) => 
        item.id === product.id? {...product, quantity: productExist.quantity + 1}: item)
        );
    }
     else{
          setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  }
  
  const removeItem = (product) =>{
    const productExist =  cartItems.find((item) => item.id === product.id);
    console.log(productExist)
    if(productExist.quantity ===1){
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    }else{
      setCartItems(cartItems.map((item) =>
        item.id === product.id ? {...productExist, quantity: productExist.quantity-1} : item
      ));
    }
  } 
  
  return (
    <div className="App">
      <Header cartItems={cartItems}/>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu products={products} cartItems={cartItems} handleAddProduct= {handleAddProduct}/>}></Route>
        <Route path="/checkout" element={<Checkout cartItems={cartItems} handleAddProduct={handleAddProduct} removeItem={removeItem} setCartItems={setCartItems}/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/thankyou" element={<Thankyou setCartItems={setCartItems}/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
