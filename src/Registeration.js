import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";
import styles from "./style.module.css";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("emailEmail", JSON.stringify(email));
      localStorage.setItem(
        "passPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 
  

  return (
    <>
 
        <div className={styles.outer}>
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit} className={styles.inner} autoComplete="off">
              <h3>SignUp</h3>

              <div className="form-group">
                <label className={styles.label}>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                  required />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                  required />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                  required />
              </div>

              <div className="form-group">
                <label>Phone No.</label>
                <input
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                required />
              </div>
              <button type="submit" className="btn btn-dark btn-lg btn-block">
              SignUp
              </button>
              <p onClick={handleClick} className="forgot-password text-right">
                Already SignUp{" "}log in?
                
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                   Every Field is important!
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
    
    </>
  );
}

export default Registration;
