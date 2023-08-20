import"./Register.css";
import React,{ useState } from 'react';

import { Link } from 'react-router-dom'
function Register() {
    const [inputs,setInputs]=useState({})

    const change= (event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInputs(values=>({...values,[name]:value}))
    }
    const submit =(event)=>{
        event.preventDefault();
        console.log(inputs)
    }
    return(
      

        <div className="login">
            <div className="logincontent">
                <div className="divleft">
                   <h1 className="facebook">FaceBook</h1>
                   <label className="quote">Connect with friends and the world around you on facebook...</label>
                </div>
                <div className="divright">     
                <form onSubmit={submit}>
                  <input placeholder="Username" type="text" name="username" value={inputs.username || ""} className="enter" onChange={change}/> 
                  <input placeholder="Phone number" type="number" value={inputs.number || ""}  name="number" className="enter" onChange={change}/>          
                  <input placeholder="Email" type="email"  name="email" value={inputs.email ||""}  className="enter" onChange={change}/>
                  <input placeholder="Password" type="password" name="pass"  value={inputs.pass}  className="enter" onChange={change}/>
                  <input type="submit" value="Create account" className="reg"/> <br/>
                  <span className="h">Already have a account?</span>
                  <Link to='/'><button className="log">Log In</button></Link><br />
                  </form> 
                </div>
            
            </div>
        </div>
    );
    
}
export default Register;