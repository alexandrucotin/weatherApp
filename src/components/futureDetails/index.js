import "./futureDetails.scss"
import WeatherSlider from "../weatherSlider"
import { useState } from 'react'

const FuturesDetails = () => {
    const [activeTab, setActiveTab] = useState("WEEK")

    return (
        <div className="d-flex flex-column h-100">
            <div className="tab d-flex position-relative">
                <div className={activeTab === "WEEK" ? "tab-item active" : "tab-item"} onClick={() => setActiveTab("WEEK")}>
                    This week
                </div>
                <div className={activeTab === "MONTH" ? "tab-item active" : "tab-item"} onClick={() => setActiveTab("MONTH")}>
                    This month
                </div>
            </div>
            <div className="future-forecast flex-grow-1 p-3">
                <WeatherSlider tab={activeTab} />
            </div>
        </div>
    )
}

export default FuturesDetails;