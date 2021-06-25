const API_KEY="62fa906e7367e8a40dd766e9eb5a1d0b";

export function getWeather(lat, lon) {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
      .then(data => { 
          console.log("THE DATA FROM API IS: ",data) 
          return data.json()
    })
  }