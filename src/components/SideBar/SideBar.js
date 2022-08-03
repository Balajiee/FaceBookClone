import "./SideBar.css"
import {RssFeed,Chat,OndemandVideo,Group,Bookmarks,QuestionMark,Work,Event,School} from "@mui/icons-material"
import {Users} from "../../dummyData"
import CloseFriends from "../CloseFriends/CloseFriends"

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
                <RssFeed className="sideBarIcon"></RssFeed>
                <span className="sideBarListItemText">Feed</span>
          </li>
          <li className="sideBarListItem">
               <Chat className="sideBarIcon"></Chat>
                <span className="sideBarListItemText">Chat</span>
          </li>
          <li className="sideBarListItem">
                <OndemandVideo className="sideBarIcon" ></OndemandVideo>
                <span className="sideBarListItemText">Videos</span>
          </li>
          <li className="sideBarListItem">
                <Group className="sideBarIcon" ></Group>
                <span className="sideBarListItemText">Groups</span>
          </li>
          <li className="sideBarListItem">
                <Bookmarks className="sideBarIcon"></Bookmarks>
                <span className="sideBarListItemText">Bookmarks</span>
          </li>
          <li className="sideBarListItem">
                <QuestionMark className="sideBarIcon"></QuestionMark>
                <span className="sideBarListItemText">Questions</span>
          </li>
          <li className="sideBarListItem">
                <Work className="sideBarIcon"></Work>
                <span className="sideBarListItemText">Jobs</span>
          </li>
          <li className="sideBarListItem">
                <Event className="sideBarIcon"></Event>
                <span className="sideBarListItemText">Events</span>
          </li>
          <li className="sideBarListItem">
                <School className="sideBarIcon"></School>
                <span className="sideBarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sideBarButton">show more</button>
        <hr className="sideBarHr"/>
        <ul className="sideBarFriendList">
          {Users.map(u=>(
            <CloseFriends key={u.id} user={u}/>
          ))}
        </ul>
      </div>
      </div>
  )
}
