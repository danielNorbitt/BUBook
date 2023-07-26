import { useState, useEffect } from "react";
import {format} from 'date-fns';
import NewsfeedHeader from "./subcomponents/NewsfeedHeader";
import PhotoPost from "./subcomponents/PhotoPost";
import VideoPost from "./subcomponents/VideoPost";
import axiosApi from "../axios";

export default function Newsfeed(){
    const [newPost, setNewPost] = useState([])

    const [posts, setPosts] = useState([])

    function setPost(post){
        setNewPost(prevPost => [...prevPost, post])
    }

    useEffect(() => {
        axiosApi
            .get("/posts")
            .then(({data}) => {
                setPosts(data)
            })
    },[])

    const postMapper = (postResponse) => {

        const postProps = {dp:postResponse.user.photo, 
                           name:postResponse.user.name, 
                           ago:`${format(new Date(postResponse.date), "dd/MM/yyyy")}`,
                           desc:postResponse.content ,
                           post:postResponse.url ,
                           likes:postResponse.likes ,
                           comments:0 ,
                           shares:postResponse.shares ,
                           reactType:"images/react2.png" ,
                           border:true ,
                           html:true ,
                           key:postResponse.id ,
                           newPost:false}

        if(postResponse.isVideo) {
            return <VideoPost {...postProps}/>
        }else{
            return <PhotoPost {...postProps}/>
        }
    }


    return (
        <main className="flex-column main">
            <NewsfeedHeader setPost={setPost}/>

            <div className="newsfeed post-container">
                {newPost.map(post => <PhotoPost dp={"images/laura.jpg"} name={"Laura"} ago={`${format(new Date(), "dd/MM/yyyy")}`} desc={post} post={""} likes={0} comments={0} shares={0} reactType={"images/react2.png"} key={Math.floor(Math.random() *9999)} newPost={true}/>)}
            </div>
            {posts.map((post) => postMapper(post))}
        </main>

    )
}
