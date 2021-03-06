import React, { useRef, useState } from "react"
import {useData} from '../api/auth-provider'

import { Link, useHistory } from "react-router-dom"

export default function Signup() {

        const emailRef = useRef()
        const passwordRef = useRef()
        const passwordConfirmRef = useRef()
        const {signup} = useData()
        const [error, setError] = useState('')
        const [loading,setLoading] = useState(false)
        const history = useHistory()

        async function handleSubmit(e) {
            e.preventDefault()
        
            if (passwordRef.current.value !== passwordConfirmRef.current.value) {
              return setError("Passwords do not match")
            }
        
            try {
              setError("")
              setLoading(true)
              await signup(emailRef.current.value, passwordRef.current.value)
              history.push("/")
            } catch {
              setError("Failed to create an account")
            }
        
            setLoading(false)
          }

            return (
                <div className="auth">
                    <div className="auth__container">
                    <h1>Register</h1>
                    {error && <span>{error}</span>}
                        <form className="auth__form"  onSubmit={handleSubmit} action="">
                            <input type="email" ref={emailRef} placeholder="Email:"/>
                            <input type="password" ref={passwordRef} placeholder="Password:"/>
                            <input type="password" ref={passwordConfirmRef} placeholder="Password Confirmation:"/>
                            <button className="login-button" disabled={loading} type="submit">Register</button>
                        </form>
                        <Link to="/">Cancel</Link>
                        </div>
                </div>
            )
        
    }