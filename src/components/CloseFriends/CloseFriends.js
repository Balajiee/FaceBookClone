import "./CloseFriends.css"


export default function CloseFriends({user}) {
  return (
    <div>
        <li className="sideBarFriend"> 
            <img className="sideBarFriendImage" src={user.profilePicture} alt="" />
            <span className="sideBarFriendName">{user.username}</span>
          </li>
    </div>
  )
}
