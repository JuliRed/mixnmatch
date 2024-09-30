import { useState } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { authorize } from "./firebase";
import { Link } from "react-router-dom";
import './sign-up.css';


const Signup = () => {
    const [usr_name, setusrName] = useState("");
    const [usr_email, setusrEmail] = useState("");
    const [usr_pw, setusrPassword] = useState("");
    //const [wrong_credential, setwrongCredential] = useState('');

    

    const handlesignup = async (e) => {
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(authorize, usr_email, usr_pw, usr_name);
            console.log('Account created');
        } catch (error) {
            console.error(error.message);
        }
    };

    
return (
    <div className="signup-container">
      <div className="signup-form-container">
        <form className="signup-form" onSubmit={handlesignup}>



        <label>Name</label>
          <input 
            type="name" 
            value={usr_name} 
            onChange={(e) => setusrName(e.target.value)} 
            placeholder="Enter your name" 
            required 
          />

          <label>Email</label>
          <input 
            type="email" 
            value={usr_email}
            onChange={(e) => setusrEmail(e.target.value)} 
            placeholder="Enter your email" 
            required 
          />

          <label>Password</label>
          <input 
            type="password" 
            value={usr_pw} 
            onChange={(e) => setusrPassword(e.target.value)} 
            placeholder="Enter your password" 
            required 
          />
          <button type="submit">Sign-Up</button>
            </form>
          </div>

          <p>
            <Link to="/login">
                <button type = "button" className="log-in-button">Log-in here</button>
                </Link>
          </p>

    </div>
  );
};

export default Signup;





