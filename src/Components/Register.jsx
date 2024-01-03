import React from "react";
import "../Styles/Register.css";

const Register = () => {
  return (
    <div className="reg-content">
      <div className="inputs">
        <form action="#">
          <div className="name-input">
            <input
              type="text"
              name="UserName"
              placeholder=""
              autoComplete="off"
              required
            />

            <label htmlFor="UserName">UserName</label>
          </div>

          <div className="mail-input">
            <input
              type="mail"
              name="Mail"
              placeholder=""
              autoComplete="off"
              required
            />
            <label htmlFor="Mail">Mail</label>
          </div>

          <div className="password-input">
            <input
              type="password"
              placeholder=""
              name="Password"
              autoComplete="off"
              required
            />
            <label htmlFor="Password">Password</label>
          </div>

          <button type="submit" className="signup">SignUP</button>
        </form>
      </div>
      <li></li>
      <div className="google">
        <button type="submit" className="Google">Signup with Google</button>
      </div>
    </div>
  );
};

export default Register;
