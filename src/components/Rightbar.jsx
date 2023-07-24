import Friends from "./subcomponents/Friends";

const friends = [{image:"images/laura.jpg",name:"Laura Kings"}]

export default function RightBar(){
    return (
        <nav className="right-bar">
            <div className="div">
                <div className="rightbar-title">
                    <div className=" flex-row friend-req contact-title">
                        <p>Friends</p>
                        <img src="images/dotmen.png" alt=""/>
                    </div>
                </div>
                {friends.map((friend,index) => <Friends image={friend.image} name={friend.name} key={index}/>)}
            </div>
        </nav>
    )
}
