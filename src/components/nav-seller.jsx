import React, { useDebugValue, useState } from "react";
import '../Styles/seller-nav.css';
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faCartShopping,faCircleMinus,faIndianRupeeSign,faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import app from "../firebase";
import { Container } from "react-bootstrap"
import { getDatabase, ref, child, get } from "firebase/database";
import image from '../Assets/artisano.jpg';


const db=getDatabase(app)
const dbRef = ref(db);
// get(child(dbRef, `seller/${currentUser.uid}`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });


export let uid=undefined;

export default function SNavBar() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useNavigate()
  uid = currentUser.uid;
  async function handleLogout() {
    setError("")
    console.log("Hello");
    try {
      await logout()
      history("/login")
    } catch {
      setError("Failed to log out")
    }
  }


  return (
    <div className="total">
      
        <img className="image"  src={image} alt="no-image"></img>
        
        <div className="buttons"> 
            <Link to = '/sdata'>VISUALIZATION</Link>
            <Link to="/add" className="add"><FontAwesomeIcon icon={faCirclePlus}/> ADD A PRODUCT</Link>
            <Link onClick={handleLogout} className="off">Logout</Link>
        </div>
      
      </div>
  );
}

