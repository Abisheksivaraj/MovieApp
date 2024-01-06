import React from "react";
import "../Styles/Register.css";


const Register = () => {
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
        <div className="line"></div>
        {/* <div className="google">
          <button type="submit" className="Google">
            Signup with Google
          </button>
        </div> */}
      </div>
      {/* <div className="line"></div>
      <div className="google">
        <button type="submit" className="Google">Signup with Google</button>
      </div> */}
    </div>
  );
};

export default Register;
