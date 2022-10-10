import React,{useState} from 'react'
import Input from './Input'
import './Header.css'
import './App.css'
import {Link, useNavigate} from 'react-router-dom'
import './Login.css'
import { signInWithGooglePopup, createUserDocFromAuth, createAuthUserWithEmailAndPassword, signInAuthWithEmailAndPassword } from './utils/firebase'
import { async } from '@firebase/util'
import HomePage from './routes/HomePage'


    const Login = (props)=>{
        const [contact, setContact] = useState({
            email: '',
            password: ''
        })
        const {email, password}= contact;
        const navigate = useNavigate();

    


    const handleSubmit =async(event)=>
    {
        event.preventDefault();

        try{
            const response = await signInAuthWithEmailAndPassword(email,password);
            navigate('/HomePage')
        }
        catch(error){
            alert("Invalid Email or Password");
        }
    }



       
    
const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }
        })
    }



    return <div className= 'header-div'>
        <h1> Login Page</h1>
        <br></br>
       <Input 
       name= 'email'
       type= 'text'
       placeholder ='Email'
       onChange = {handleChange}
       value = {contact.email}
       />

       <br></br>

       <Input 
       name='password'
       type= 'password'
       placeholder ='Password'
       onChange = {handleChange}
       value = {contact.password}
       />
    <br></br>
    <Input 
       name='confirmPassword'
       type= 'password'
       placeholder ='Confirm Password'
       onChange = {handleChange}
       value = {contact.confirmPassword}
       />


       <br></br>
       <br></br>

       <button onClick={handleSubmit}>

        Login   
   </button>


    <br></br>
    <br></br>

    <button onClick>
    <Link to='/signup'>
        Sign up instead
    </Link>
    </button>
    </div>

}
export default Login