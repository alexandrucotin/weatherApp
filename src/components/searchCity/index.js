
import search from '../../assets/Search.png'
import "./searchCity.css"

const SearchCity = () => {
    return (
        <div className="searchCity">
            <div>
                <h3 className="forecast-title">Search</h3>
            </div>
            <div className="custom-input-group">
                <input type="text" className="input" placeholder="ex miami" name="name" />
                <div className="searchIcon"><img src={search} alt="searchbar" /></div>
            </div>            
        </div>
    )
}

export default SearchCity;