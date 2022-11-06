import React, { useDebugValue, useState } from "react";
import '../Styles/nav.css';
import { Link} from "react-router-dom"
import image from "../Assets/artisano.jpg"

import { Container } from "react-bootstrap"


export default function GNavBar() {
  


  return (
    <div className="navbar">
      <img  style ={{width:"70px" ,height:"50px"}}src={ image }alt="no-image"></img>
      <Container>
        <Link to="/slogin" id="seller">SELLER PAGE</Link>
        <Link to="/login" id="user">USER PAGE</Link>
     </Container>
    </div>
  );
}