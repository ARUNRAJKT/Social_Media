import"./Sidebarright.css";
import React from "react";
import Online from "../Online/Online";
import { online } from "../../dommydata";
// import AddReaction from '@mui/icons-material';


function Sidebarright() {
    return(
        <div className="rightbar"><br /><br />
            <div className="bday" >
            <i class="fa fa-gift" aria-hidden="true" id="gift"></i>&nbsp;&nbsp;<b>Athul chonadath</b> and <b> 2 other friends</b> have birthday today
            </div><br />
               <center>
            <div className="rightphoto"><img id="rphoto" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/821b5c102205139.5f316c7f876b4.jpg" alt="" /></div></center>
            <div className="row"><br />
                <div >
                <b><h4>Online Friends</h4></b>
                </div>
                {online.map((odetails)=>(
               <Online o = {odetails}/> 
                ))}
            
               
            
                 
        

            </div>
        </div>
    );
    
}
export default Sidebarright;