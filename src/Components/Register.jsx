import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "../Styles/Register.css";

import {signInWithPopup,FacebookAuthProvider, GoogleAuthProvider} from 'firebase/auth';
import { authentication } from "../Firebase";




const Register = () => {

  const signInWithFacebook = () => {

    const provider = new FacebookAuthProvider();
    signInWithPopup(authentication, provider)
      .then((rel) => {
        console.log(rel);
      })
      .catch((err) => {
        console.log(err.message);
      });

  }

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((rel) => {
        console.log(rel);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="reg-content">
      <div className="inputs">
        <h1>SignUp</h1>
        <form action="#">
          <div className="form-input">
            <input
              type="text"
              name="UserName"
              placeholder=""
              autoComplete="off"
              required
            />
            <span></span>
            <label htmlFor="UserName">UserName</label>
          </div>

          <div className="form-input">
            <input
              className="username"
              type="mail"
              name="Mail"
              placeholder=""
              autoComplete="off"
              required
            />
            <span></span>
            <label htmlFor="Mail">Mail</label>
          </div>

          <div className="form-input">
            <input
              type="password"
              placeholder=""
              name="Password"
              autoComplete="off"
              required
            />
            <span></span>
            <label htmlFor="Password">Password</label>
          </div>

          <button type="submit" className="signup">
            Signup
          </button>
        </form>
        <div className="or">OR</div>

        <div className="icons">
          <div className="google" onClick={signInWithGoogle}>
            <FaGoogle />
          </div>
          <div className="facebook" onClick={signInWithFacebook}>
            <FaFacebookF />
          </div>
          <div className="twitter">
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
