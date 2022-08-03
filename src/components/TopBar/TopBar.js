import "./TopBar.css"
import{Search,Person,Chat,Notifications}from"@mui/icons-material"

export default function TopBar() {
  return (
    <div className="topBarContainer">
        <div className="topBarLeft">
            <span className="logo">FaceBook-Balaji</span>
        </div>
        <div className="topBarCenter">
            <div className="searchBar">
            <Search className="searchIcon"></Search>
            <input placeholder="Search for Friends,Posts or Videos" className="searchInput" />
            </div>
        </div>
        <div className="topBarRight">
            <div className="topBarLinks">
                <span className="topBarLink">HomePage</span>
                <span className="topBarLink">TimeLine</span>
            </div>
           <div className="topBarIcons">
           <div className="topBarIconItem">
                <Person></Person>
                <span className="topBarIconBadge">1</span>
            </div>
            <div className="topBarIconItem">
                <Chat></Chat>
                <span className="topBarIconBadge">2</span>
            </div>
            <div className="topBarIconItem">
                <Notifications></Notifications>
                <span className="topBarIconBadge">1</span>
            </div>
           </div>
            <img src="/assets/01.jpg" alt="" className="topBarImg" />
        </div>
    </div>
  )
}
