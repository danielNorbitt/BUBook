import { useState } from "react";
import {format} from 'date-fns';
import NewsfeedHeader from "./subcomponents/NewsfeedHeader";
import PhotoPost from "./subcomponents/PhotoPost";
import VideoPost from "./subcomponents/VideoPost";

const friends = [{dp:"images/laura.jpg", name:"Laura", ago:"17/10/1999", likes:0, comments:0, shares:0, desc:"jajajajaj", post:"images/laura.jpg", reactType:"images/react2.png", border :false, html:true, key:4324, newPost:false},
{dp:"images/laura.jpg", name:"Laura", ago:"17/10/1999", likes:0, comments:0, shares:0, desc:"jajajajaj", post:"images/laura.jpg", reactType:"images/react2.png", border :false, html:true, key:4324, newPost:false},
{dp:"images/laura.jpg", name:"Laura", ago:"17/10/1999", likes:0, comments:0, shares:0, desc:"jajajajaj", post:"images/laura.jpg", reactType:"images/react2.png", border :false, html:true, key:4324, newPost:false},
{dp:"images/laura.jpg", name:"Laura", ago:"17/10/1999", likes:0, comments:0, shares:0, desc:"jajajajaj", post:"images/laura.jpg", reactType:"images/react2.png", border :false, html:true, key:4324, newPost:false},
{dp:"images/laura.jpg", name:"Laura", ago:"17/10/1999", likes:0, comments:0, shares:0, desc:"jajajajaj", post:"images/laura.jpg", reactType:"images/react2.png", border :false, html:true, key:4324, newPost:false},
{dp:"images/laura.jpg", name:"Laura", ago:"17/10/1999", likes:0, comments:0, shares:0, desc:"jajajajaj", post:"images/laura.jpg", reactType:"images/react2.png", border :false, html:true, key:4324, newPost:false},
{dp:"images/laura.jpg", name:"Laura", ago:"17/10/1999", likes:0, comments:0, shares:0, desc:"jajajajaj", post:"images/laura.jpg", reactType:"images/react2.png", border :false, html:true, key:4324, newPost:false}]

export default function Newsfeed(){
    const [newPost, setNewPost] = useState([])

    function setPost(post){
        setNewPost(prevPost => [...prevPost, post])
    }
    return (
        <main className="flex-column main">
            <NewsfeedHeader setPost={setPost}/>

            <div className="newsfeed post-container">
                {newPost.map(post => <PhotoPost dp={"images/laura.jpg"} name={"Robin Dela Cruz"} ago={`${format(new Date(), "dd/MM/yyyy")}s`} desc={post} post={""} likes={0} comments={0} shares={0} reactType={"images/react2.png"} key={Math.floor(Math.random() *9999)} newPost={true}/>)}
            </div>
            {friends.map((friend,index) => <PhotoPost dp={friend.dp} name={friend.name} ago={friend.ago} desc={friend.desc} post={friend.post} likes={friend.likes} comments={friend.comments} shares={friend.shares} reactType={friend.reactType} border={friend.border} html={friend.html} key={index} newPost={friend.newPost}/>)}
        </main>

    )
}
