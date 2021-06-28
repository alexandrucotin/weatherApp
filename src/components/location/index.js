
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux"
import { actions } from '../../store/index'

import localization from '../../assets/Location.png'
import "./location.scss"

const Location = () => {
    const dispatch = useDispatch()
    const { getCurrentLocation } = bindActionCreators(actions, dispatch)

    return (
        <div className="Location  p-3 p-lg-0">
            <div>
                <h3 className="forecast-title">Location</h3>
            </div>
            <div className="Location-container" onClick={() => { getCurrentLocation() }}>
                <div className="Location-icon">
                    <img src={localization} alt="location icon" />
                </div>
                <div className="Location-label">Add Location</div>
            </div>
        </div>
    )
}

export default Location;