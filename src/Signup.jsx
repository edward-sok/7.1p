import React,{useState} from 'react'
import Input from './Input'
import Button from './Button'
import './App.css'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from './utils/firebase'


const Signup = (props)=>{
        const [contact, setContact] = useState({
            firstName: '',
            lastName: '',
            email: '',
            password:'',
            confirmPassword:''
        })
       
        const {firstName, lastName, email, password, confirmPassword}= contact;
        const navigate = useNavigate();
        console.log(contact);

        
    const handleSubmit =async(event)=>
    {
        event.preventDefault();

        if (password !== confirmPassword){
            alert('Passwords do not match!')
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocFromAuth (user, {firstName, lastName});
            navigate('/Login')
        }
        catch(error){
            console.log('error edward', error.message)
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
                <h1> Signup Page</h1>
        <br></br>
      <Input 
       name= 'firstName'
       type= 'text'
       placeholder ='First Name'
       onChange = {handleChange}
       value = {contact.firstName}
       />
    <br></br>
    <Input 
       name= 'lastName'
       type= 'text'
       placeholder ='Last Name'
       onChange = {handleChange}
       value = {contact.lastName}
       />   

        <br></br>
        <Input 
       name= 'email'
       type= 'email'
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

       <button onClick={handleSubmit}>

    Sign Up
       </button>
       
  
    <br></br>
    <br></br>

    <button onClick>
    <Link to='/login'>
        Login instead
    </Link>
    </button>
    </div>

}
export default Signup