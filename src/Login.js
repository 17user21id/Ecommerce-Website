import React, { useState } from 'react';
import "./Login.css";
import { Link,useHistory } from 'react-router-dom';
import {auth} from './firebase';
export default function Login() {
    const history = useHistory();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const login = event =>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {

            history.push('/');

        }).catch(e =>  alert(e.message))
    

    }
    
    const register = event =>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email , password)
        .then((auth) => {
            //create a user and login
            history.push('/')
        }).catch(e =>  alert(e.message))

    }
    
    

    return (
        <div className="login">
            <Link to="/">
            <img
                className="login_logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"                
            />
            </Link>

        <div className="login_container">
            <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={event => setEmail(event.target.value)}></input>
                <h5>Password</h5>
                <input type="password" value={password} onChange={event => setPassword(event.target.value)}></input>
                <button onClick={login} className="login_signIn" type="submit"><strong>Sign In</strong></button>
            </form>

                <p>
                    By Signing-in you agree to Amazon's condition of Use and sale.please see our privacy policies our cookies notice
                    and our intreset base act.
                </p>


            <button onClick={register} className="login_resister"><strong>Create your Amazon Account</strong></button>

        </div>

        </div>
    )
}
