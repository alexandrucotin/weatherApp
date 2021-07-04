
import "./mobileNav.scss"
import homeIcon from "../../assets/Home.png"
import searchIcon from "../../assets/Search_dark.png"
import locationIcon from "../../assets/Location_dark.png"
import { NavLink } from "react-router-dom";

const MobileNav = () => {


    return (
        <div className="mobile-nav-container">
            <div className="mobile-nav d-flex align-items-center justify-content-around">
                <NavLink to="/" exact={true} activeClassName="active">
                    <div className="bottom-bar-item ">
                        <img src={homeIcon} alt="homepage icon" />
                    </div>
                </NavLink>
                <NavLink to="/search" activeClassName="active">
                    <div className="bottom-bar-item">
                        <img src={searchIcon} alt="search icon" />
                    </div>
                </NavLink>
                <NavLink to="/location" activeClassName="active">
                    <div className="bottom-bar-item">
                        <img src={locationIcon} alt="location icon" />
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default MobileNav;