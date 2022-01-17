import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { firebase, auth, provider, Fprovider } from "../firebase/Firebase";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Header } from "../header/Header";
import "./form.css";

export default function Login() {
  const validateEmail = RegExp(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const validPassword = RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,20}$/);

  const [inputState, setInputState] = useState({
    email: "",

    password: "",
  });
  const [error, setError] = useState({});
  let name, value;
  const postinputState = (event) => {
    name = event.target.name;
    value = event.target.value;
    setInputState({ ...inputState, [name]: value });
  };
  const validation = () => {
    let error = {};

    if (!inputState.email) {
      error.email = "Email is required";
    } else if (!validateEmail.test(inputState.email)) {
      error.email = "Invalid Email";
    }

    if (!inputState.password) {
      error.password = "Enter password";
    } else if (!validPassword.test(inputState.password)) {
      error.password =
        "atleast 1 uppercase 1 lowercase and 1 number minimum 8 characters";
    }
    return error;
  };

  const history = useHistory();

  const submitHandler = async (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(inputState.email, inputState.password)
      .then((data) => {
        window.sessionStorage.setItem("name",data.user.bc.displayName)
        window.sessionStorage.setItem("email",data.user.bc.email)
        alert("Login Successfull");
        history.push("/");
      });
  };
  const google_login = () => {
    auth.signInWithPopup(provider).then((data) => {
      console.log(data);
    
      window.sessionStorage.setItem("name",data.user.bc.displayName)
      window.sessionStorage.setItem("email",data.user.bc.email)
      alert("Login Successfull");
        history.push("/");
    });
  };

  const facebook_login = () => {
    auth.signInWithPopup(Fprovider).then((data) => {
      console.log(data);
    
      window.sessionStorage.setItem("name",data.user.bc.displayName)
      window.sessionStorage.setItem("email",data.user.bc.email)
      alert("Login Successfull");
        history.push("/");
    });
  };

  return (
    <>
      <Header />
      <Container>
        <div id="sgnup" class="shadow-lg p-3 mb-5 bg-white rounded">
          <h4>Login</h4>

          <form>
            <input
              type="email"
              name="email"
              value={inputState.email}
              onChange={postinputState}
              placeholder="Enter your email"
            ></input>
            <p className="Lerror">{error.email}</p>

            <input
              type="password"
              name="password"
              value={inputState.password}
              onChange={postinputState}
              placeholder="Create password"
            ></input>
            <p className="Lerror">{error.password}</p>

            
            <div id="gbtn" type="submit" onClick={google_login}>
              Login with Google
            </div>
            <div id="fbtn" type="submit" onClick={facebook_login}>
              Login with facebook
            </div><br></br>

            <button id="sbtn" onClick={submitHandler}>
              SUBMIT
            </button>
            <p>
              Don't have an account? <Link to={`/signUp`}> SignUp</Link>
            </p>
          </form>
        </div>
      </Container>
    </>
  );
}
