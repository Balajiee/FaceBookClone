import "./Share.css"
import{PermMedia,Label,Room,EmojiEmotions,VideoSettings}from "@mui/icons-material"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/person/2.jpeg" alt="" className="shareProfileImg"/>
                <input placeholder="What's in your mind Balaji!!" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcons"></PermMedia>
                        <span className="shareOptionText">Photo</span>
                    </div>
                    <div className="shareOption">
                        <VideoSettings htmlColor="blue"className="shareIcons"></VideoSettings>
                        <span className="shareOptionText">Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="green"className="shareIcons"></Label>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="goldenrod"className="shareIcons"></Room>
                        <span className="shareOptionText">Locations</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="pink" className="shareIcons"></EmojiEmotions>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
        </div>
  )
}
