import"./Centerfeeds.css";
import React from "react";
import Posts from "../Posts/Posts";
import {Post} from "../../dommydata";

function Centerfeeds() {
    return(<div >
        {Post.map((pdetails)=>(
               <Posts pd = {pdetails}/> 
                ))}br
                <center>Created by Arun raj kt</center> 
                </div>
                 
        
    //      <div className="centerfeed">
    //      <div className="row">
    //          <div className="feedprofileimage"><img src="https://i.pinimg.com/564x/37/3f/79/373f79b980b16c00e46dafbf2bfed14d.jpg" alt="" />&nbsp;<span id="namefeed"><b> Arun Raj</b></span>&nbsp;&nbsp;<span id="time">5 mins ago</span></div>
    //      </div>
    //      <div className="feedhead">Love For ALL,Hatred for None</div><br />
    //      <div className="feedimage">

    //      </div>
    //      <div className="feedbottom" ><span className="like"><i class="fa fa-thumbs-up" aria-hidden="true"></i></span>&nbsp;&nbsp;<span className="heart"><i class="fa fa-heart" aria-hidden="true"></i></span>&nbsp;&nbsp;11 people like this <span id="comment">2 comments</span></div>
    //       </div>

    //       <div className="centerfeed">
    //      <div className="row">
    //          <div className="feedprofileimage"><img src="https://i.pinimg.com/564x/37/3f/79/373f79b980b16c00e46dafbf2bfed14d.jpg" alt="" />&nbsp;<span id="namefeed"><b> Arun Raj</b></span>&nbsp;&nbsp;<span id="time">5 mins ago</span></div>
    //      </div>
    //      <div className="feedhead">Love For ALL,Hatred for None</div><br />
    //      <div className="feedimage">

    //      </div>
    //      <div className="feedbottom" ><span className="like"><i class="fa fa-thumbs-up" aria-hidden="true"></i></span>&nbsp;&nbsp;<span className="heart"><i class="fa fa-heart" aria-hidden="true"></i></span>&nbsp;&nbsp;11 people like this <span id="comment">2 comments</span></div>
         
      
    //  </div>
    //  <div className="centerfeed">
    //      <div className="row">
    //          <div className="feedprofileimage"><img src="https://i.pinimg.com/564x/37/3f/79/373f79b980b16c00e46dafbf2bfed14d.jpg" alt="" />&nbsp;<span id="namefeed"><b> Arun Raj</b></span>&nbsp;&nbsp;<span id="time">5 mins ago</span></div>
    //      </div>
    //      <div className="feedhead">Love For ALL,Hatred for None</div><br />
    //      <div className="feedimage">

    //      </div>
    //      <div className="feedbottom" ><span className="like"><i class="fa fa-thumbs-up" aria-hidden="true"></i></span>&nbsp;&nbsp;<span className="heart"><i class="fa fa-heart" aria-hidden="true"></i></span>&nbsp;&nbsp;11 people like this <span id="comment">2 comments</span></div>
         
      
    //  </div>
    //  </div>

    );
    
}
export default Centerfeeds;