import React, { useDebugValue, useState } from "react";
import '../Styles/nav.css';
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { db } from "../firebase"
import { set, ref, onValue } from "firebase/database";
import { Container } from "react-bootstrap"


export default function NavBar() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history("/login")
    } catch {
      setError("Failed to log out")
    }
  }


  return (
    <div className="navbar">
      <img src="" alt="no-image"></img>
      
      <div className="buttons">
        <Link onClick={""} href="" id="signup">signup</Link>
        <Link onClick={handleLogout} href="" id="logout">Logout</Link>
      </div>
    </div>
  );
}

