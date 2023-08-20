import React,{ useState } from "react";

function Posts({pd}){
    const [liked,setLike]=useState(pd.like)
    const [isLiked,updateLike]=useState()
    const [comment,updateComment]=useState(pd.comment)
    const callLike=()=>{
        setLike(isLiked ? liked-1 : liked+1)
        updateLike(!isLiked)
    }
    return(
        <div className="margin">
        <div className="centerfeed">
            <div className="row">
                <div className="feedprofileimage"><img src={pd.postpic} alt="" />&nbsp;
                <span id="namefeed"><b> {pd.postname}</b></span>&nbsp;&nbsp;
                <span id="time">{pd.time}</span></div>
            </div>
            <div className="feedhead">{pd.quote}</div><br />
            <div className="feedimage">
              <img src={pd.postimg} alt="" />
            </div>
            <div className="feedbottom" >
                <span className="like">
                    <i class="fa fa-thumbs-up" aria-hidden="true" onClick={callLike} ></i>
                </span>&nbsp;&nbsp;
                <span className="heart">
                    <i class="fa fa-heart" aria-hidden="true" onClick={callLike}></i>
                </span>&nbsp;&nbsp;{liked} people like this 
                <span id="comment" onClick={()=>updateComment(comment+1)}>{comment} comments</span></div>
        </div>
        </div>
    )
}
export default Posts;