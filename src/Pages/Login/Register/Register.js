import React from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from '../../../firebase.init';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  if(user){
    navigate('/home')
  }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password)
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
