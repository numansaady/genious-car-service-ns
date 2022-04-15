import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fab } from '@fortawesome/free-brands-svg-icons'
import React from "react";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SocialLogin = () => {
    const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  let errorMsg;
  if (error || error1) {
    errorMsg = (
      <div>
        <p>Error: {error?.message} {error1?.message}</p>
      </div>
    );
  }

  if(user || user1){
      navigate('/home');
  }

  return (
    <div>
      <p className="text-center text-danger">{errorMsg}</p>
      <div className="d-flex align-items-center w-50 mx-auto">
        <div style={{ height: "1px" }} className="w-50 bg-secondary"></div>
        <p className="pt-2 px-3">or</p>
        <div style={{ height: "1px" }} className="w-50 bg-secondary"></div>
      </div>
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary d-block mx-auto mb-3 w-25"
        >
          <FontAwesomeIcon icon={"google"} /> Google Sign In
        </button>
        <button className="btn btn-primary d-block mx-auto mb-3 w-25">
          <FontAwesomeIcon icon={"google"} /> Facebook Sign In
        </button>
        <button  onClick={()=> signInWithGithub()}
        className="btn btn-primary d-block mx-auto mb-3 w-25">
          <FontAwesomeIcon icon={"google"} /> Github Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
