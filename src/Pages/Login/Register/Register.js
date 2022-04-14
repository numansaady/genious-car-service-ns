import React from "react";
import { Link } from "react-router-dom";
import './Register.css';

const Register = () => {
  
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }
  return (
    <div className="container reg-form">
      <h2>Please Register</h2>
      <form onSubmit={handleRegister}>
          <input type="text" name="name" placeholder="Write Your Name" required />
          <input type="email" name="email" id="" placeholder="Write Your Email" required/>
          <input type="password" name="password" id="" placeholder="Write your password" required />
          <input type="submit" value="Register" />
      </form>
      <p>Already Have an Account? <Link to='/login'>Please Login</Link></p>
    </div>
  );
};

export default Register;
