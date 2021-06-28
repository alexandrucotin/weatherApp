
import "./mobileNav.scss"
import home from "../../assets/Home.png"
import search from "../../assets/Search_dark.png"
import location from "../../assets/Location_dark.png"
import { Link } from "react-router-dom";
const MobileNav = () => {

    return (
        <div className="mobile-nav-container">
            <div className="mobile-nav d-flex align-items-center justify-content-around">
                <Link to="/">
                    <div className="bottom-bar-item">
                        <img src={home} alt="homepage icon" />
                    </div>
                </Link>
                <Link to="/search">
                    <div className="bottom-bar-item">
                        <img src={search} alt="search icon" />
                    </div>
                </Link>
                <Link to="/location">
                    <div className="bottom-bar-item">
                        <img src={location} alt="location icon" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MobileNav;