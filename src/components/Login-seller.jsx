import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap"

export default function SLogin() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const {login} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(login)

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history("/shome")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
    <Container
      className=" d-flex align-items-center justify-content-center bg-dark "
      style={{ minHeight: "100vh",maxWidth:"100vw" } }
    >
      <div className="w-100  " style={{ maxWidth: "450px" }}>
    <h1 className="bg-dark text-light text-center mb-4">PL SQUARED </h1>
    
      <Card>
      
        <Card.Body>
          
          <h2 className="text-center mb-4">Seller Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3 bg-light">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 text-light">
        Need an account? <Link to="/ssignup" className="text-warning">Sign Up</Link>
      </div>
      </div>
    </Container>
    </>
  )
}

