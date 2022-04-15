import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if(user){
      navigate(from, {replace: true});
    }

    const resetPassword = async () => {
      const email = emailRef.current.value;
      await sendPasswordResetEmail(email);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }    

  return (
    <div className="container mb-5">
      <h2 className="text-center my-4 text-primary">Please Login</h2>
      <Form onSubmit={handleSubmit} style={{width: '400px', margin: '20px auto'}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Button className="d-block mx-auto mb-3 w-50" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p style={{width: '400px', margin: '10px auto'}}>New to Genious Car? <Link to='/register' className="text-primary text-decoration-none">Please Register</Link></p>

      <p style={{width: '400px', margin: '10px auto'}}>Forget Password? <Link to='/register' className="text-primary text-decoration-none" onClick={resetPassword}>Reset Password</Link></p>

      <SocialLogin/>
    </div>
  );
};

export default Login;
