import React, { useDebugValue, useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import {db} from "../firebase"
import { set,ref ,onValue} from "firebase/database";
import { Container } from "react-bootstrap"


export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useNavigate()
  
  function udb()
  {
    const e=currentUser.uid;
    const obj={"userid": currentUser.email };
   set(ref(db, 'users/'+currentUser.uid), obj);
   console.log ((currentUser.uid));

  }
function fetch()
{
  const dref = ref(db, "categories");
        onValue(dref, (snapshot) => {
            snapshot.forEach(element => {
                let a = element.val();
                console.log( Object.keys(a))
                Object.keys(a).forEach(key => {
                  console.log("a[key]");
                         // console.log(a[key]);
                          Object.keys(a[key]).forEach(ele=>{
                              
                          console.log(a[key][ele]["seller"]);
                          console.log(a[key][ele]["name"]);
                          console.log(a[key][ele]["price"]); 
                          })
            

                  
                  //console.log(a[key]);
              })})})
}

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history("/login")
    } catch {
      setError("Failed to log out")
    }
  }
console.log("a");

  return (
    <>
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh",maxWidth:"100vw" }}
    >
      <div className="w-100" style={{ maxWidth: "500px" }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
      <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
        <Button variant="link" onClick={udb}>
        upload
        </Button>
        <Button variant="link" onClick={fetch}>
        fetch
        </Button>
      </div>
      </div>
    </Container>
      
    </>
  )
}