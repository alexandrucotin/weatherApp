
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux"
import { actions } from '../../store/index'
import { isMobile } from 'react-device-detect';
import { useHistory } from "react-router-dom";

import localization from '../../assets/Location.png'
import "./location.scss"

const Location = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const { getCurrentLocation } = bindActionCreators(actions, dispatch)

    const handleLocation = () => {
        getCurrentLocation();
        if (isMobile) {
            history.push('/main-mobile')
        }
    };

    return (
        <div className="location">
            <div>
                <h3 className="forecast-title">Location</h3>
            </div>
            <div className="location-container" onClick={() => { handleLocation() }}>
                <div className="location-icon">
                    <img src={localization} alt="location icon" />
                </div>
                <div className="location-label">Add Location</div>
            </div>
        </div>
    )
}

export default Location;