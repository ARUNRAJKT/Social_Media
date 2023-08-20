import"./Centermain.css";
import React from "react";

function Centermain() {
    return(
    <div ><br /><br /><br />
        
    
        <div className="centerbar">
            <div className="row">
                <div className="proimage"><input className="writeup" placeholder="What's in your mind Arun?"  type="text" /></div>
            </div>
            <center><div className="cline"></div></center>
            <div className="row">
                <div className="cattaches">
                <i class="fa fa-picture-o" aria-hidden="true"  style={{"color":"red"}}></i>  Photo or Video &nbsp;  &nbsp;  
                <i class="fa fa-tag" aria-hidden="true" style={{"color":"blue"}}></i>  Tag &nbsp; &nbsp;  
                <i class="fa fa-map-marker" aria-hidden="true" style={{"color":"green"}}></i>  Location &nbsp;  &nbsp;  
                <i class="fa fa-smile-o" aria-hidden="true" style={{"color":"rgb(176, 179, 0)"}}></i> Feelings  &nbsp;   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; 
                <button>Share</button>

                </div>
            </div>
            
         
        </div>
        </div>
    );
    
}
export default Centermain;


