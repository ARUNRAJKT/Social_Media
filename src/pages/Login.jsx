import"./Login.css";
import React,{ useState } from "react";


import {Link} from 'react-router-dom';

function Login() {
    const [inputs,setInputs]=useState({})
    // const update=()=>{
    //     setName("HAHha..")
    // }
    const handlechange = (event)=>{
        const name = event.target.name;
        const value =event.target.value;
        setInputs(values=>({...values,[name]:value}))
    }
    const handlesubmit =(event)=>{
        event.preventDefault();
        console.log(inputs)
    }
    return(
        <div className="lg">
            <div className="lc">
                <div className="dl">
                   <h1 className="fb">facebook</h1>
                   <label className="q">Connect with friends and the world around you on facebook...</label>
                </div>
                <div className="dr">   
                <form onSubmit={handlesubmit}>           
                  <input placeholder="Email" type="email" name="email" value={inputs.email ||""} className="e" onChange={handlechange}/>
                  <input placeholder="Password" type="password" name="password" value={inputs.password ||"" } onChange={handlechange} className="e"/>
                  <input type="submit" className="r"  value="Login"/>
              <br />
                  <a href="www.facebook.com" className="f">Forgot Password ?</a><br />
                  <Link to="/register">    <button className="l" >Create new account</button></Link>
                  </form>   
                </div>
            
            </div>
        </div>
    );
    
}
export default Login;