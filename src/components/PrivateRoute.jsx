import React from "react"
import { Route, Redirect, redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children ,redirect_to}) {
  const { currentUser } = useAuth()
  return currentUser ? children : <Navigate to={redirect_to}/>;

 

  // return (
  //   <Route
  //     {...rest}
  //     render={props => {
  //       return currentUser ? <Component {...props} /> : redirect("/login")
  //     }}
  //   ></Route>
  // )
}
