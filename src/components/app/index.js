// REACT
import { useEffect, Fragment } from "react";

// ROUTER
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux"
import { actions } from '../../store/index'

// STYLE
import "./app.scss";

// LOADER
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

// COMPONENTS
import MobileNav from "../mobileNav/mobileNav";
import HomeComponent from "../home"
import DetailsMobileComponent from "../detailsWeatherMobile"
import SearchCity from "../searchCity";
import Location from "../location";

const App = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch()
    const { handleInitialData } = bindActionCreators(actions, dispatch)

    useEffect(() => {
        handleInitialData();
    }, [])



    if (Object.keys(state.currentCity).length !== 0) {
        return (
            <Router>
                <Fragment>
                    {state.loading &&
                        <div className="spinner">
                            <Loader
                                type="Puff"
                                color="#00BFFF"
                                height={100}
                                width={100}
                            /></div>
                    }

                    <div className="p-lg-4">
                        <Switch>
                            <Route path="/" exact component={HomeComponent} />
                            <Route path="/search" exact component={SearchCity} />
                            <Route path="/location" exact component={Location} />
                            <Route path="/main-desktop" exact component={DetailsMobileComponent} />
                        </Switch>
                    </div>
                    <div className="d-lg-none d-xl-none">
                        <MobileNav />
                    </div>
                </Fragment >
            </Router>
        )
    } else {
        return (
            <div> LOADING....</div>
        )
    }
};

export default App;