import { useState } from 'react';
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux"
import { actions } from '../../store/index'
import search from '../../assets/Search.png'
import "./searchCity.scss"
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import { useHistory } from "react-router-dom";
import { isMobile } from 'react-device-detect';

// the type props is needed because the SearchCity components has 2 functionallity. 
// type = 1 it adds a city to ta array 
// type = 0 it changes the current city with the searched city

const SearchCity = ({ type }) => {
    const [address, setAddress] = useState("")
    const dispatch = useDispatch()
    const { getSearchedCity } = bindActionCreators(actions, dispatch)
    const history = useHistory();

    const handleChange = address => {
        setAddress(address);
    };

    const handleSelect = address => {
        console.log(address)
        setAddress(address)
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                getSearchedCity(latLng.lat, latLng.lng, type)

            })
            .then(() => {
                if (isMobile && type === 0) {
                    history.push('/main-mobile')
                }
            })
            .catch(error => console.error('Error', error));
    };

    return (
        <div className="searchCity p-lg-0">
            <div className={type === 1 ? "d-none" : ""}>
                <h3 className="forecast-title">Search</h3>
            </div>
            <div>
                <PlacesAutocomplete
                    value={address}
                    onChange={(e) => handleChange(e)}
                    onSelect={(e) => handleSelect(e)}
                >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div className="custom-input-group">
                            <input
                                {...getInputProps({
                                    placeholder: 'ex miami',
                                    className: 'input',
                                })}
                            />
                            <div className="searchIcon"><img src={search} alt="searchbar" /></div>
                            <div className="autocomplete-dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map((suggestion, index) => {
                                    const className = suggestion.active
                                        ? 'suggestion-item--active'
                                        : 'suggestion-item';
                                    const style = suggestion.active
                                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                    return (
                                        <div
                                            {...getSuggestionItemProps(suggestion, {
                                                className,
                                                style,
                                            })}
                                            key={index}
                                            className="px-3 py-2"

                                        >
                                            <span>{suggestion.description}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete>
            </div>
            {
                type === 0 ? (
                    <div className="mt-5 text-center d-lg-none">
                        Type a city inside the search box, you will be redirected to its details where you can discover the hourly, weekly and monthly weather.
                    </div>) : ("")
            }
        </div>
    );
}

export default SearchCity;