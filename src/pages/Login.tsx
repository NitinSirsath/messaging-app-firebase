import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <div className="formContainer">
    <div className="formWrapper">
      <span className="logo">Messaging App</span>
      <span className="title">Login</span>
      <form >
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Sign in</button>
        {/* {err && <span>Something went wrong</span>} */}
      </form>
      {/* <p>You don't have an account? <Link to="/register">Register</Link></p> */}
    </div>
  </div>
  )
}

export default Login