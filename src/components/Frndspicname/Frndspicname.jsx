import React from "react";

function Frndspicname({user}){
    return(
        <div className="col">
                <img className="friendprofile" src={user.src} alt="" />
                <span className="fname">{user.name}</span>
         </div>   
    )
}
export default Frndspicname;