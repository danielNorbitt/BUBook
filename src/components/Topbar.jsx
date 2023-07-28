export default function Topbar(){
    return (
        <header>
            <nav>
                <div>
                    <a href=""><img src="images/logo2.png" alt=""/></a>
                </div>
                <div className="search hover">
                    <i className="fa-sharp fa-solid fa-magnifying-glass search_icon"></i>
                    <input type="text" placeholder="Search Facebook"/>
                </div>
                <div className="top-icon hover toggle-menu">
                    <a href="#!"><img src="images/bars.png" alt="" title="Menu"/></a>
                </div>
                <ul className="top-menu">
                    <li className="top-icon hover chats">
                        <a href="#!"><img src="images/messenger.png" alt="" title="Messenger"/></a>
                        <div className="top-icon-des">
                            <p className="top-icon-p"><small>Messenger</small></p>
                        </div>
                    </li>
                    <li className="top-icon hover notif">
                        <a href="#!"><img src="images/notif.png" alt="" title="Notifications"/></a>
                        <div className="top-icon-des">
                            <p className="top-icon-p"><small>Notifications</small></p>
                        </div>
                    </li>
                </ul>
            </nav>
            <ul className="nav-menu flex-row">
                <li><a href="#!"><i className="fa-sharp fa-solid fa-house"></i></a></li>
                <li><a href="#!"><img src="images/friend-mobile.png" alt=""/></a></li>
                <li><a href="#!"><img src="images/mes-mobile.png" alt=""/></a></li>
                <li><a href="#!"><i className="fa-regular fa-bell"></i></a></li>
                <li><a href="#!"><i className="bx bx-slideshow"></i></a></li>
                <li><a href="#!"><i className="bx bx-store"></i></a></li>
            </ul>
        </header>
    )
}
