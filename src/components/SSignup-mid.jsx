import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
 import { Link, useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap"
import {db} from "../firebase"
import { set,ref ,onValue} from "firebase/database";

export default function SSignupMid() {
   const emailRef = useRef()
   const nameRef = useRef()
   const addressRef = useRef()
   const interestRef = useRef()
   const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function udb(e)
  {
    e.preventDefault();
    setError("")
    try{
        console.log(emailRef);
    const e=currentUser.uid;
    const obj={"userid": currentUser.email ,"name": nameRef.current.value,"address": addressRef.current.value,"domain":interestRef.current.value };
    console.log(obj);
    await set(ref(db, 'seller/'+currentUser.uid), obj);
   console.log ((currentUser.uid));
   history("/shome")
    }
    catch
    {
        setError("Cannot able to update the details")
    }


  }

  

  return (
    <>
    <Container
      className=" d-flex align-items-center justify-content-center bg-dark flex-column"
      style={{ minHeight: "100vh",maxWidth:"400vw",backgroundImage:"../public/artisano.jpg" } }
    >
        <div className="w-100  " style={{ maxWidth: "450px" }}>
    <h1 className="bg-dark text-light text-center mb-4">PL SQUARED</h1>
      <Card>
        <Card.Body>
          
          <h2 className="text-center mb-4">Enter Your Details</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form >
          <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" ref={nameRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="address">
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" type="text" ref={addressRef} required />
            </Form.Group>
            <Form.Group id="Interest">
              <Form.Label>Domain</Form.Label>
              <Form.Control type="text" ref={interestRef} required />
            </Form.Group>
            
            <Button disabled={loading} onClick={udb} className="w-100" type="submit">
              Proceed to Page
            </Button>
          </Form>
        </Card.Body>
      </Card>
      </div>
    </Container>
</>
)
}