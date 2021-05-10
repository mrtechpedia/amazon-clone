import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));

    //some fancy firebase login shitttttttt......
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })

      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://i.insider.com/539f3ffbecad044276726c01?width=1100&format=jpeg&auto=webp"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>

          <p>
            By continuing, you agree to Amazon fake clone's Conditions of Use
            and Privacy Notice.
          </p>
          <button className="login__registerButton" onClick={register}>
            Create your Amazon account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
