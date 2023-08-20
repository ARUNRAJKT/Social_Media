import React from "react";

function Online({o}){
    return(
        <div className="col right">
            <i id="online" class="fa fa-circle" aria-hidden="true"></i>
            <img className="friendprofile" src={o.profilepic} alt="" />
            <span className="fname">{o.profilename}</span>   
        </div> 
    )
}
export default Online;