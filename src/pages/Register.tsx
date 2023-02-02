import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import add from '../assets/addAvatar.png'
type Props = {}

const Register = (props: Props) => {
    const [err, setErr] = useState(false);
      const [loading, setLoading] = useState(false);
  return (
    <div className="formContainer">
    <div className="formWrapper">
      <span className="logo">Lama Chat</span>
      <span className="title">Register</span>
      <form >
        <input required type="text" placeholder="display name" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <input required style={{ display: "none" }} type="file" id="file" />
        <label htmlFor="file">
          <img src={add} alt="" />
          <span>Add an avatar</span>
        </label>
        <button disabled={loading}>Sign up</button>
        {loading && "Uploading and compressing the image please wait..."}
        {err && <span>Something went wrong</span>}
      </form>
      <p>
        {/* You do have an account? <Link to="/register">Login</Link> */}
      </p>
    </div>
  </div>
  )
}

export default Register