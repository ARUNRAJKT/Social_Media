import"./Navbar.css";
import React from "react";
import {Link} from 'react-router-dom';


function Navbar() {
    return(
        <div className="navbar">
            <div className="nav">
               <div className="pagename"><h1 >Mai_Tweet</h1> </div>
               <div className="searchfull"> 
                     <input className="search" type="search" placeholder="Search for friend,post or video"  /><i class="fa fa-search"  aria-hidden="true" id="sicon"></i>      
                </div> 
                <div className="profile"> <Link to='/profile' style={{"textDecoration":"none","color":"white"}}><h3>Profile</h3></Link></div>
                <div className="home"> <Link to='/' style={{"textDecoration":"none","color":"white"}} ><h3>Home</h3></Link></div>
                <div className="login"> <Link to='/login' style={{"textDecoration":"none","color":"white"}} ><h3>Login</h3></Link></div>
                <div className="friendreq"><i class="fa fa-user" aria-hidden="true"></i><i class="fa fa-circle" id="nno"aria-hidden="true"></i><span id="nc">1</span> </div>
                <div className="messages"><i class="fa fa-comments" aria-hidden="true"></i><i class="fa fa-circle" id="nno"aria-hidden="true"></i><span id="nc">4</span></div>
                <div className="notification"><i class="fa fa-bell" aria-hidden="true"></i><i class="fa fa-circle" id="nno"aria-hidden="true"></i><span id="nc">9</span></div>
                <div className="profileicon"><img className="profileicon" src="https://i.pinimg.com/564x/37/3f/79/373f79b980b16c00e46dafbf2bfed14d.jpg" alt="" /></div>
            </div>
            
         
        </div>
    );
    
}
export default Navbar;