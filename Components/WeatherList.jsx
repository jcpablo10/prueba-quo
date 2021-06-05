import React, {useState, useEffect} from 'react'


const WeatherList = () => {

    let addFavorite = (id, cityName) => {

        let data = {id: id, name: cityName}
        let city = []
        let localData = localStorage.getItem('dataCities')

        if ( localData === null ) {
            city.push(data)
            localStorage.setItem('dataCities', JSON.stringify(city))
        } else {

            
            let editDataCities = JSON.parse(localData)
            
            editDataCities.push(data)
            // delete duplicated items
            editDataCities = editDataCities.map(JSON.stringify).reverse() 
            .filter(function(item, index, arr){ return arr.indexOf(item, index + 1) === -1; }) 
            .reverse().map(JSON.parse) 

            console.log(editDataCities)
            localStorage.clear()
            localStorage.setItem('dataCities', JSON.stringify(editDataCities))
            
        }
     
        
    }

    const [cities, setCities] = useState([]);
    
    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/find?lat=19.4978&lon=-99.1269&cnt=20&units=metric&appid=7cbd0d28fe3bf4ce8c15e0a8865f8a10')
        .then(response => response.json())
        .then(data => {   
            setCities(data.list)
        })
    }, [])

    return (
        <ul className="weather__list">
            {
                cities.map((city) => (
                    <li key={city.id}>
                        <div>
                            <p>City name: {city.name}</p>
                        </div>
                        <div>
                            <p>Temperatura {city.main.temp}</p>
                            <p>Humedad {city.main.humidity}</p>
                            <p>Pressure {city.main.pressure}</p>
                            <p>Feels like:{city.main.feels_like}</p>
                        </div>
                        <div>
                            <button id={city.id} onClick={()=>{addFavorite(city.id, city.name)}}>
                                add Favorite
                            </button>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default WeatherList
