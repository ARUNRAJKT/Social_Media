import Navbar from "../components/Navbar/Navbar";
import Sidebarleft from "../components/Sidebarleft/Sidebarleft";
import "./Home.css"
import React from "react";
import Centermain from "../components/Centermain/Centermain";
import Centerfeeds from "../components/Centerfeeds/Centerfeeds";
import Sidebarright from "../components/Sidebarright/Sidebarright";

export default function Home(){
    return(
        <React.Fragment>
            <Navbar/>
            <div className="divcontents">
            <Sidebarleft/>
            <div className="cf">
            <Centermain/>
            <Centerfeeds/>
        

            </div>
                     
            <Sidebarright/>
            
            </div>
           
        </React.Fragment>
    )
    
}





