import React from "react";
import SSignup from "../components/Signup-seller"
import Signup from "../components/Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom"
import SDashboard from "./Dashboard-seller"
import SLogin from "./Login-seller"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import SForgotPassword from "./ForgotPassword-seller"
import ForgotPassword from "./ForgotPassword"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./nav";
import SNavBar from "./nav-seller";
//import Product from "./Product";
import Seller from "./seller";
import NewProduct from "./new_product";
import Guest from "./GuestUser";
import SignupMid from "./Signup-mid";
import SSignupMid from "./SSignup-mid";
import Product from "./Product";
import Data from "./data-analysis";
//import Cart from "./cart";
//<Route path='/cart' element={<Cart data={datas} cart={carts}></Cart>}></Route>
//import { carts,datas } from "./Product1";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Guest />} />
            <Route path="/sdata" element={
             <div id="chartdiv"><Data /></div>} />
            <Route path="/signupmid" element={<SignupMid/>} />
            <Route path="/ssignupmid" element={<SSignupMid/>} />
            <Route path="/slogin" element={<SLogin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add" element={<NewProduct />} />
            <Route path="/dashboard" element={<PrivateRoute redirect_to="/login"> <Dashboard /> </PrivateRoute>} />
            <Route path="/home" element={<PrivateRoute redirect_to="/"> <NavBar /><Product/> </PrivateRoute>} />
            <Route path="/shome" element={<PrivateRoute redirect_to="/"> <SNavBar /><Seller /> </PrivateRoute>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/ssignup" element={<SSignup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/sforgot-password" element={<SForgotPassword />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App