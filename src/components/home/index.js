
import { Fragment, useState } from "react";
import plus from "../../assets/Plus.png";
import TodaysDetails from "../todaysDetails";
import FuturesDetails from "../futureDetails";
import SearchCity from "../searchCity";
import Location from "../location";

import LargeCity from "../largeCity"
import SmallCity from "../smallCity"

// STYLE
import "./home.scss";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomeComponent = () => {
    const [addingCity, setAddingCity] = useState(false)
    const state = useSelector((state) => state);

    return (
        <div className="container">
            <div className="row gx-lg-5 align-items-end">
                <div className="col-lg-12 col-xl-8 d-none d-lg-block">
                    <LargeCity />
                </div>
                <div className="col-xs-12 mt-lg-4 mt-xl-0 offset-lg-2 offset-xl-0 col-lg-8 col-xl-4  miniature-row">
                    <div className="d-flex flex-column">
                        <div className="d-lg-none d-md-none welcome-message-mobile my-3">Good morning! <br />Mario</div>
                        {addingCity ? (
                            <div className="">
                                <SearchCity type={1} />
                                <div onClick={e => setAddingCity(false)} className="text-center text-uppercase close-button my-3">
                                    <small><u>close</u></small>
                                </div>
                            </div>) : (
                                <div onClick={e => setAddingCity(true)} className="d-flex add-city-container p-3 justify-content-center align-items-center">
                                    <div>
                                        <img src={plus} alt="plus sign" className="mx-2" />
                                    </div>
                                    <div className="add-city-label mx-2">Aggiungi citt&agrave;</div>
                                </div>
                            )}
                        {
                            state.cities.map((city, index) => {
                                return (
                                    <Fragment key={index}>
                                        <div className={index % 2 === 0 ? "d-none d-lg-flex" : "d-none d-lg-flex small-city-black"}>
                                            <SmallCity city={city} />
                                        </div>
                                        <div className="d-lg-none">
                                            <Link to="/main-mobile"><SmallCity className="add-city-searchbox" city={city} /></Link>
                                        </div>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="row gx-5 mt-5 d-none d-lg-flex" >
                <div className="col-lg-6 col-xl-6 col-xxl-3">
                    <TodaysDetails />
                </div>
                <div className="col-lg-6 col-xl-6 offset-xxl-0  col-xxl-5">
                    <FuturesDetails />
                </div>
                <div className="col-xl-12 col-xxl-4 d-flex flex-column justify-content-between mt-xl-4">
                    <div className="row">
                        <div className="col-lg-6 col-xl-6 col-xxl-12">
                            <SearchCity type={0} />
                        </div>
                        <div className="col-lg-6 col-xl-6 col-xxl-12">
                            <Location />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent;