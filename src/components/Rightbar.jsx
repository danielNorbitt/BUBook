import { useEffect , useState} from "react";
import Friends from "./subcomponents/Friends";
import axiosApi from "../axios";

export default function RightBar(){

    const [friends,setFriends] = useState([])

    useEffect(() => {
        axiosApi
            .get("/users")
            .then(({data}) => {
                setFriends(data)
            })
    },[])

    return (
        <nav className="right-bar">
            <div className="div">
                <div className="rightbar-title">
                    <div className=" flex-row friend-req contact-title">
                        <p>Friends</p>
                        <img src="images/dotmen.png" alt=""/>
                    </div>
                </div>
                {friends.map((friend) => <Friends image={friend.photo} name={friend.name} key={friend.id}/>)}
            </div>
        </nav>
    )
}
