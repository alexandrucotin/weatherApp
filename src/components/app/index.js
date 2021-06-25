import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import  {bindActionCreators} from "redux"
import {actions}  from '../../store/index'

import LargeCity from "../largeCity"
import SmallCity from "../smallCity"
import "./app.css";
import plus from "../../assets/Plus.png";
import TodaysDetails from "../todaysDetails";
import FuturesDetails from "../futureDetails"; 
import SearchCity from "../searchCity";
import Localization from "../localization";


const App = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch()
    const {handleInitialData} = bindActionCreators(actions, dispatch)
    useEffect(() => {
        handleInitialData();
    }, [])

    if( Object.keys(state.currentCity).length !== 0){
        return (
            <div className="container my-5">
                <div className="row gx-5 align-items-end">
                    <div className="col-md-8">
                        <LargeCity />
                    </div>
                    <div className="col-md-4">
                        <div className="row miniatureContainer">
                            <div className="col-xs-12 d-flex justify-content-center p-4">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <img src={plus} alt="plus sign" className="mx-2"/>
                                    </div>
                                    <div className="add-city-label mx-2">Aggiungi citt&agrave;</div>
                                </div>
                            </div>
                            <div className="col-xs-12">
                                {/* <SmallCity /> */}
                            </div>
                            <div className="col-xs-12">
                                {/* <SmallCity /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-5 mt-5" >
                    <div className="col-md-3">
                            <TodaysDetails/>
                        </div>
                        <div className="col-md-5">
                            <FuturesDetails />
                        </div>
                        <div className="col-md-4 d-flex flex-column justify-content-between">
                            <div className="">
                                <SearchCity />
                            </div>
                            <div className="">
                                <Localization />
                            </div>
                        </div>
                </div>
            </div>
        )}else{
            return (
                <div> LOADING....</div>
            )
        }
};

export default App;