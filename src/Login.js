import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import App from "./App";
import styles from "./style.module.css";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("passPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("emailEmail").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <div className={styles.outer}>
      {home ? (
        <form onSubmit={handleLogin} className={styles.inner}>
          <h3>LogIn</h3>
          <div className="form-group">
            <label className={styles.label}>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
              required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
              required />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <App />
      )}
    </div>
  );
}
export default Login;
