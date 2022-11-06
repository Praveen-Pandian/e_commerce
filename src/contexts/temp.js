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




export default function SNavBar() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useNavigate()

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
      <div className="seller-navbar">
        <img src={Image} alt="no-image"></img>
        <div className="buttons"> 
            <h3>welcome {currentUser.uid}</h3>   
            <Link to="/add" href="" id="add"><FontAwesomeIcon icon={faCirclePlus}/> ADD A PRODUCT</Link>
            <Link onClick={handleLogout} href="" id="logout">Logout</Link>
        </div>
      </div>
  );
}

