import"./Sidebarleft.css";
import React from "react";
import Frndspicname from "../Frndspicname/Frndspicname";
import {Users} from "../../dommydata";


function Sidebarleft() {
    return(
        <div className="sidebar"><br /><br /><br />
            <div className="sb1"><br />
                <table>
            <tr>
                <td><i id="sbicon" class="fa fa-rss" aria-hidden="true"></i></td>
                <td>Feed</td>
            </tr>
            <tr>
                <td><i class="fa fa-commenting" aria-hidden="true"></i></td>
                <td>Chats</td>
            </tr>
            <tr>
                <td><i class="fa fa-play-circle" aria-hidden="true"></i></td>
                <td>Videos</td>
            </tr>
            <tr>
                <td><i className="sbicon" class="fa fa-users" aria-hidden="true"></i></td>
                <td>Groups</td>
            </tr>
            <tr>
                <td><i className="sbicon" class="fa fa-bookmark" aria-hidden="true"></i></td>
                <td>Bookmarks</td>
            </tr>
            <tr>
                <td><i className="sbicon" class="fa fa-question-circle" aria-hidden="true"></i></td>
                <td>Questions</td>
            </tr>
            <tr>
                <td> <i className="sbicon" class="fa fa-suitcase" aria-hidden="true"></i></td>
                <td>Jobs</td>
            </tr>
            <tr>
                <td><i className="sbicon" class="fa fa-calendar" aria-hidden="true"></i></td>
                <td>Events</td>
            </tr>
            <tr>
                <td><i class="fa fa-graduation-cap" aria-hidden="true"></i></td>
                <td className="sectionname">Courses</td>
            </tr>
            <tr>
                <td colSpan={2}><button className="more">Show more</button></td>
            </tr>
            
            </table><center>
            <div className="line"></div></center>
            <div className="row">
                {/* <div className="col">
                <img className="friendprofile" src="https://likhowithpride.com/site/assets/files/1108/opulent-profile-square-07.jpg" alt="" /><span className="fname">Athul Chonadath</span>
                </div> 
                <div className="col">
                <img className="friendprofile" src="https://www.stepstherapy.com.au/wp-content/uploads/2018/10/Yazmin-profile-picture-square.jpg" alt="" /><span className="fname">Anjana raveendran</span>
                </div> 
                <div className="col">
                <img className="friendprofile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvMCto4GWw62xLwDYOC1cWWNpLM-cao46VA&usqp=CAU" alt="" /><span className="fname">Akash Madhu</span>
                </div> 
                <div className="col">
                <img className="friendprofile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBBw-0L691l8wYigFFTF_K5Uxtl1iZ9uFPvMMTIYfnOqf1u2qXWe7RSuegAPScJf0oDIQ&usqp=CAU" alt="" /><span className="fname">Sreedhanya p</span>
                </div> 
                <div className="col">
                <img className=
                "friendprofile" src="https://images.squarespace-cdn.com/content/v1/5bfc8dbab40b9d7dd9054f41/1543424201416-S6Q5OPV25MXETU154ZLQ/Randy+Krum+Profile+Photo+square.jpg?format=1000w" alt="" /><span className="fname">Yashwanth</span>
                </div> 
                <div className="col">
                <img className="friendprofile" src="https://www.sardiniauniqueproperties.com/wp-content/uploads/2015/10/heavenmcarthur-profile-square-300px.jpg" alt="" /><span className="fname">Amrutheswari</span>
                </div>    */}
                {Users.map((u)=>(
               <Frndspicname user = {u}/> 
                ))}
                 

               
        

            </div>
            </div>
        </div>
    );
    
}
export default Sidebarleft;