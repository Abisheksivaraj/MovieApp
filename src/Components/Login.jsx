import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import "../Styles/Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  function change() {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  }
  return (
    <div className="login-content">
      <div className="inputs">
        <h1>Login</h1>
        <form action="#">
          <div className="form-input">
            <input
              className="username"
              type="mail"
              name="Mail"
              placeholder=""
              autoComplete="off"
              required
            />
            <label className="input-label" htmlFor="Mail">
              Mail
            </label>
          </div>

          <div className="form-input input-2">
            <div className="pass">
              <input
                className="input-field"
                type={showPassword ? "text" : "password"}
                placeholder=""
                name="Password"
                autoComplete="off"
                required
              />
              <div className="eye">
                <FaEye onClick={change} />
              </div>
              <label className="input-label" htmlFor="Password">
                Password
              </label>
            </div>
          </div>

          <button type="submit" className="signup">
            Login
          </button>
        </form>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Login;
