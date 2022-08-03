import "./RightBar.css"
import {Users} from "../../dummyData"
import Online from "../Online/Online"

export default function RightBar({profile}) {
  const HomeRightBar=()=>{
    return(
      <>
      <div className="birthDayContainer">
        <img src="assets/08gift.png" alt="" className="birthDayImg" />
        <span className="birthDayText">
         <b>sundarapandy</b>  and <b>3 others friends</b>  have a birthday
        </span>
        </div>
        <img src="assets/12ad.jpg" alt="" className="rightBarAd" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
            {Users.map(u=>(
              <Online key={u.id} user={u}/>
            ))}
        </ul>
      </>
    )
  }
  const ProfileRightBar=()=>{
    return(
      <>
      <h4 className="rightBarTitle">user information</h4>
      <div className="rightBarInfo">
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">City :</span>
          <span className="rightBarInfoValue">NewYork</span>
        </div>
          <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">From:</span>
          <span className="rightBarInfoValue">India</span>
          </div>
          <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">Relationship:</span>
          <span className="rightBarInfoValue">Single</span>
          </div>
      </div>
      <h4 className="rightBarTitle">user friends</h4>
      <div className="rightBarFollowings">
        <div className="rightBarFollowing">
          <img src="assets/person/1.jpeg" alt="" className="rightBarFollowingImg" />
          <span className="rightBarFollowingName"> Kathir</span>
        </div>
        <div className="rightBarFollowing">
          <img src="assets/person/2.jpeg" alt="" className="rightBarFollowingImg" />
          <span className="rightBarFollowingName"> Dinesh Kumar</span>
        </div>
        <div className="rightBarFollowing">
          <img src="assets/person/3.jpeg" alt="" className="rightBarFollowingImg" />
          <span className="rightBarFollowingName"> Sudharshan</span>
        </div>
        <div className="rightBarFollowing">
          <img src="assets/person/4.jpeg" alt="" className="rightBarFollowingImg" />
          <span className="rightBarFollowingName"> Fari</span>
        </div>
        <div className="rightBarFollowing">
          <img src="assets/person/5.jpeg" alt="" className="rightBarFollowingImg" />
          <span className="rightBarFollowingName"> Nithya</span>
        </div>
        <div className="rightBarFollowing">
          <img src="assets/person/6.jpeg" alt="" className="rightBarFollowingImg" />
          <span className="rightBarFollowingName"> Aleena</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {profile?<ProfileRightBar></ProfileRightBar>:<HomeRightBar></HomeRightBar>}
      </div>
      </div>
  )
}
