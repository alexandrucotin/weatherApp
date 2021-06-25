import localization from '../../assets/Location.png'
import "./localization.css"

const Localization = () =>{
    return(
        <div className="localization">
            <div>
                <h3 className="forecast-title">Localization</h3>
            </div>
            <div className="localization-container">
                <div className="localization-icon">
                    <img src={localization} alt="location icon"/>
                </div>
                <div className="localization-label">Add localization</div>
            </div>          
        </div>
    )
}

export default Localization;