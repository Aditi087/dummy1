import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import { firebase, auth, provider, Fprovider } from "../firebase/Firebase";
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Header } from '../header/Header';



export default function Reg() {
    const validateEmail=RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    const validPassword=RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,20}$/)
    
    
    const [inputState, setInputState] = useState({
        
        email: "",
        
        password:"",
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
            error.password = "atleast 1 uppercase 1 lowercase and 1 number minimum 8 characters";
          }
        return error;
      };
      const google_login = () => {
        auth.signInWithPopup(provider).then((data) => {
          console.log(data);
          alert("Registration Successfull")
          history.push("/login");
        });
      };
      

      const facebook_login = () => {
        auth.signInWithPopup(Fprovider).then((data) => {
          console.log(data);
          alert("Registration Successfull")
          history.push("/login");
        });
      };

      const history = useHistory();
      
      const submitHandler = async (event) => {
        event.preventDefault();
        firebase
        .auth()
        .createUserWithEmailAndPassword(inputState.email, inputState.password)
        .then((data) => {
          alert("Registration Successfull")
          history.push("/login");
        });

        
      };

      


    return (
        <>
            <Header/>
            <Container>
                <div id="sgnup" class="shadow-lg p-3 mb-5 bg-white rounded">
                <h4>SignUp</h4>
                <p>Please fill your information to register.</p>
                <form>
                
               
                <input
                  type="email"
                  name="email"
                  value={inputState.email}
                  onChange={postinputState}
                  placeholder="Enter your email"
                  
                ></input>
                <p
                  className="Lerror"
                  
                >
                  {error.email}
                </p>

                

                <input
                  type="password"
                  name="password"
                  value={inputState.password}
                  onChange={postinputState}
                  placeholder="Create password"
                  
                ></input>
                <p
                  className="Lerror"
                  
                >
                  {error.password}
                </p>


                <button id="gbtn" type="submit" onClick={google_login}>
                      Signup with Google
                    </button><br></br>

                    <button id="fbtn" type="submit" onClick={facebook_login}>
                      Signup with Facebook
                    </button><br></br>
                        
                    <button id="sbtn" onClick={submitHandler}>SUBMIT</button>
                    <p>Already have an account? <Link to={`/Login`}> Log In</Link></p>

                    
                </form>
                </div>
            </Container>
            
        </>
    )
}


