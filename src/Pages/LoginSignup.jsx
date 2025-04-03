import React from 'react'
import "./CSS/LoginSignup.css"

function LoginSignup() {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Sign Up</h1>
        <form >
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password'/>
          <button>Continue</button>
        </form>
        <p>Already have an account? <span>Login here</span></p>
        <div className="logincheck">
          <input type="checkbox"/>
          <p>By Continuing ,i agree to terms of use & privacy policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
