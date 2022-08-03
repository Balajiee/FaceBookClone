import "./Profile.css"
import Feed from '../../Feed/Feed'
import RightBar from '../../RightBar/RightBar'
import SideBar from '../../SideBar/SideBar'
import TopBar from '../../TopBar/TopBar'

export default function Profile() {
  return (
    <>
    <TopBar></TopBar>
    <div className="profile">
      <SideBar></SideBar>
      <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img src="assets/post/3.jpeg" alt="" className="profileCoverImage" />
            <img src="assets/person/2.jpeg" alt="" className="profileUserImage" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Balaji</h4>
                <span className="profileInfoDesc">Hello My Dear Friends!!!</span>
            </div>
        </div>
        <div className="profileRightBottom">
      <Feed></Feed>
      <RightBar profile></RightBar>
        </div>
      </div>
    </div>
    </>
  );
}
