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

const SearchCity = ({ type }) => {
    const [address, setAddress] = useState("")
    const dispatch = useDispatch()
    const { getSearchedCity } = bindActionCreators(actions, dispatch)

    const handleChange = address => {
        console.log(address)
        setAddress(address);
    };

    const handleSelect = address => {
        setAddress(address)
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                getSearchedCity(latLng.lat, latLng.lng, type)
            })
            .catch(error => console.error('Error', error));
    };

    return (
        <div className="searchCity p-3 p-lg-0">
            <div className={type === 1 ? "d-none" : ""}>
                <h3 className="forecast-title">Search</h3>
            </div>
            <div >
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
                                {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                        ? 'suggestion-item--active'
                                        : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                    return (
                                        <div
                                            {...getSuggestionItemProps(suggestion, {
                                                className,
                                                style,
                                            })}
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
        </div>
    );
}

export default SearchCity;