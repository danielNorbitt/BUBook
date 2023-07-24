import Groups from "./subcomponents/Groups";

const groups = [{ image: "images/laura.jpg", title: "Grupos da Ohana" }]

export default function Leftbar() {
    return (
        <nav className="left-bar">

            <div className="signal"></div>
            
            <div className="flex-item">
                <div>
                    <a href="#!" className="side-icon hover2">
                        <i className="fa-solid fa-house"></i>
                        <font>Home</font>
                    </a>
                </div>
                <div>
                    <a href="https://www.facebook.com/thelaukings" className="side-icon2 hover2">
                        <div className="circle-container2">
                            <img src="images/laura-circle.png" alt="" />
                        </div>
                        <font>Laura Kings</font>
                    </a>
                </div>
            </div>

            <div className="flex-item">
                <div>
                    <a href="#!" className="side-icon2 hover2">
                        <div className="circle-container">
                            <img src="images/compact.png" alt="" />
                        </div>
                        <font>Menu</font>
                    </a>
                </div>
                <div>
                    <a href="#!" className="side-icon2 hover2">
                        <div className="circle-container2">
                            <img src="images/watch.png" alt="" />
                        </div>
                        <font>Watch</font>
                    </a>
                </div>
                <div>
                    <a href="#!" className="side-icon2 hover2">
                        <div className="circle-container2">
                            <img src="images/marketplace.png" alt="" />
                        </div>
                        <font>Marketplace</font>
                    </a>
                </div>
                <div>
                    <a href="#!" className="side-icon2 hover2">
                        <div className="circle-container2">
                            <img src="images/gaming.png" alt="" />
                        </div>
                        <font>Gaming</font>
                    </a>
                </div>
            </div>

            <div className="flex-item">
                <div>
                    <a href="#!" className="side-icon2 hover2">
                        <div className="circle-container">
                            <img src="images/group.png" alt="" />
                        </div>
                        <font>Groups</font>
                    </a>
                </div>
                {groups.map((group,index) => <Groups image={group.image} title={group.title} key={index}/>)}
            </div>
        </nav>
    )
}
