
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
        <Fragment>
            <div className="row gx-lg-5 align-items-end">
                <div className="col-lg-12 col-xl-8 d-none d-lg-block">
                    <LargeCity />
                </div>
                <div className="col-xs-12 mt-lg-4 mt-xl-0 offset-lg-2 offset-xl-0 col-lg-8 col-xl-4  miniature-row">
                    <div className="row  p-3 p-lg-0">
                        {addingCity ? (
                            <div className="col-xs-12">
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
                                    <Fragment>
                                        <div className={index % 2 == 0 ? "col-xs-12 d-none d-lg-flex" : "col-xs-12 d-none d-lg-flex small-city-black"}>
                                            <SmallCity city={city} />
                                        </div>
                                        <div className="col-xs-12 d-lg-none">
                                            <Link to="/main-desktop"><SmallCity className="add-city-searchbox" city={city} /></Link>
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
                            <SearchCity type="0" />
                        </div>
                        <div className="col-lg-6 col-xl-6 col-xxl-12">
                            <Location />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default HomeComponent;