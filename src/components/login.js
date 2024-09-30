import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "@firebase/auth";
import { authorize } from "./firebase";
import { Link } from "react-router-dom";
import './login.css';


const Login = () => {
    const [usr_email, setusrEmail] = useState("");
    const [usr_pw, setusrPassword] = useState("");
    //const [wrong_credential, setwrongCredential] = useState('');

    

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(authorize, usr_email, usr_pw);
            console.log('Logged in');
        } catch (error) {
            console.error(error.message);
        }
    };

    const googleProvider = new GoogleAuthProvider();
    
    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(authorize, googleProvider);
            console.log('Google login successful', result);
        } catch (error) {
            console.error(error.message);

        }
    };

return (
    <div className="login-container">
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleLogin}>
          <label>Email*</label>
          <input 
            type="email" 
            value={usr_email}
            onChange={(e) => setusrEmail(e.target.value)} 
            placeholder="Enter your email" 
            required 
          />

          <label>Password*</label>
          <input 
            type="password" 
            value={usr_pw} 
            onChange={(e) => setusrPassword(e.target.value)} 
            placeholder="Enter your password" 
            required 
          />

          <button type="submit">Log In</button>
          <button type="button" className="google-login-btn" onClick={handleGoogleLogin}>
                Sign-in with Gmail
              </button>
            </form>
          </div>

          <p>
            <Link to="/signup" className="sign-up page">Create an Account here</Link>
          </p>

      <div className="login-text-container">
        <h1>Create</h1>
        <h1>Style that</h1>
        <h1>Speaks</h1>
      </div>
    </div>
  );
};

export default Login;





