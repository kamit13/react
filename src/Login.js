import  React , { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	const signIn =e =>{
		e.preventDefault();
		//some fancy firebase login
		auth
		.signInWithEmailAndPassword(email, password)
		.then( auth => {
			history.push('/')
		})
		.catch(error => alert(error.message))
	}

	const register =e =>{
		e.preventDefault();
		//some fancy firebase register(this means its created a succesfully email and password)
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				console.log(auth);
				if(auth){
					history.push('/')
				}
			})
			.catch(error => alert(error.message))

	} 
	 

  return ( 
    <div className="login">
    	<Link to="/">
	    	 <img className="login__logo" 
	    	 	src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' 
	    	 />
    	</Link>
    	<div className="login__container">
    		<h1>Sign-In</h1>
    		<form>
    			<h5>E-mail</h5>
    			<input type='text' 
	    			value={email} 
	    			onChange={ e => setEmail(e.target.value)} 
    			/>

				<h5>Password</h5>
    			<input type='password' 
	    			value={password} 
	    			onChange={ e => setPassword(e.target.value)}
	    		/>

    			<button type="submit" className="login__signInButton" onClick={signIn} >Sign In</button>    			
    		</form>
    		<p>
    			By Signing-in you are aggreee to the conditions of Use & sale. 
    			Please see our Privacy, our Cookies Notice and our Interest-Based Ads Notice.
    		</p>
    		<button className="login__registerButton" onClick={register}>Create Your Account </button>
    	</div>

    </div>
    );
}
export default Login;