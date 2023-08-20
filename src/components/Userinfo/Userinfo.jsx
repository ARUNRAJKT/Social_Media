import"./Userinfo.css";
import React from "react";
function Userinfo() {
    return(
        <div className="userinfo">
          <div className="info"><b style={{"font-weight":"760","font-size":"20px"}}>User information</b> <br />
          <b>City&nbsp;&nbsp;:</b>&nbsp;&nbsp;New York <br />
          <b>From&nbsp;&nbsp;:</b>&nbsp;&nbsp;Madrid <br />
          <b>Relationship&nbsp;&nbsp;:</b>&nbsp;&nbsp;Complicated <br />
          </div>
          <div className="userfrnds" >
              <h4>User Friends</h4></div>
              <div className="container-fluid">
              <div className="fpic">
                  <div className="row" id="r">
                <div className="col-6"><div className="pic"><img  src="https://www.stepstherapy.com.au/wp-content/uploads/2018/10/Yazmin-profile-picture-square.jpg" alt="" />Anjana Raveendran</div></div>
                <div className="col-6"> <div className="pic"><img  src="https://likhowithpride.com/site/assets/files/1108/opulent-profile-square-07.jpg" alt="" />Athul Chonadath</div></div>
                </div>
                <div className="row">
               <div className="col-6"> <div className="pic"><img  src="https://images.squarespace-cdn.com/content/v1/5bfc8dbab40b9d7dd9054f41/1543424201416-S6Q5OPV25MXETU154ZLQ/Randy+Krum+Profile+Photo+square.jpg?format=1000w" alt="" />Yashwanth</div></div>
                <div className="col-6"><div className="pic"><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBBw-0L691l8wYigFFTF_K5Uxtl1iZ9uFPvMMTIYfnOqf1u2qXWe7RSuegAPScJf0oDIQ&usqp=CAU" alt="" />Sreedhanya p</div></div>
                </div>
                <div className="row">
                <div className="col-6"><div className="pic"><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvMCto4GWw62xLwDYOC1cWWNpLM-cao46VA&usqp=CAU" alt="" />Akash Madhu</div></div>
                
                <div className="col-6"><div className="pic"><img  src="https://www.sardiniauniqueproperties.com/wp-content/uploads/2015/10/heavenmcarthur-profile-square-300px.jpg" alt="" />Amrutheswari</div></div>
                </div>
                </div>
                </div><br /><br />
        <div className="pupload" >
        <h4>Photos uploaded</h4></div>
        <div className="container-fluid">
        <div className="picsup">
            <div className="row ">
                <div className="col-6"><img src="https://i.pinimg.com/originals/92/9f/1e/929f1e0d6cf462caffcc5b0f69b102c1.jpg" alt="" /></div>
                <div className="col-6"><img src="https://th.bing.com/th/id/R.91af1c4f0c7d6aabcab41f1a1341b4fb?rik=GrUaK2gLQp%2bLjg&riu=http%3a%2f%2fstatic3.businessinsider.com%2fimage%2f53add8feecad04a03583b203%2finstagrams-best-travel-photographers-will-make-you-want-to-explore-the-world.jpg&ehk=aDYUceFpcwbobr6ZF1g2Xg9s8DVw26Z%2ffgvZ23ZwHcI%3d&risl=&pid=ImgRaw&r=0" alt="" /></div>   
            </div>
            <div className="row ">
                <div className="col-6"><img src="https://th.bing.com/th/id/R.9242d50e48d812b79a08888ea978f5ee?rik=FMx7NOn8g1jRnQ&riu=http%3a%2f%2fvivalifestyleandtravel.com%2fcached%2fdownload%2fv1%2fvivafront%2fbh4xto3ovnmb9smvfvzk.png&ehk=WE53pcTyJ2eEeB1luq2%2ftUMwHpyucKgauwq3T3Itr4w%3d&risl=&pid=ImgRaw&r=0" alt="" /></div>
                <div className="col-6"><img src="https://captionsgram.com/wp-content/uploads/2020/08/Firefly-Music-Festival.jpg" alt="" /></div>    
            </div>
            <div className="row ">
                <div className="col-6"><img src="https://i.pinimg.com/originals/39/48/1a/39481a003aebcd5841b2084aaeb428a5.jpg" alt="" /></div>
                <div className="col-6"><img src="https://i.pinimg.com/564x/37/3f/79/373f79b980b16c00e46dafbf2bfed14d.jpg" alt="" /></div>
            </div>
</div>
</div>
  </div>
    );
    
}
export default Userinfo;