import Navbar from "../components/Navbar/Navbar";
import Cover from "../components/Cover/Cover";
import Sidebarleft from "../components/Sidebarleft/Sidebarleft";
import "./Profile.css"
import React from "react";
import Centermain from "../components/Centermain/Centermain";
import Centerfeeds from "../components/Centerfeeds/Centerfeeds";
import Userinfo from "../components/Userinfo/Userinfo";

export default function Profile(){
    return(
        <React.Fragment>
            <Navbar/>
            <div className="divc">
                <Sidebarleft/>
                <Cover/>
                <Centermain/>
                <Centerfeeds/>
        
            <div className="profile">
                   <Userinfo/>
            </div>
            </div>
           
        </React.Fragment>
    )
    

}

