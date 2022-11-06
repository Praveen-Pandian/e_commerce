import React, { useContext, useState, useEffect } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase"
import firebase from "firebase/app"
import { db } from "../firebase"
import { set, ref } from "firebase/database";

const AuthContext = React.createContext()



export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  
  function signup(email, password) {

    return createUserWithEmailAndPassword(auth, email, password)

  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)

  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email)
  }


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
console.log(AuthContext);