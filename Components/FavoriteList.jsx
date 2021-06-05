import React, { useState } from 'react'


const FavoriteList = () => {

    let localFavorites = JSON.parse(localStorage.getItem('dataCities'))
    let [cities, setFavorite] = useState(localFavorites)

    
    const deleteFavorite = (id) => {

        for (let index = 0; index < cities.length; index++) {
            
            if (cities[index].id === id) {
                cities.splice(index,1)
            }
        }  

        localStorage.clear()
        localFavorites = localStorage.setItem('dataCities', JSON.stringify(cities))
        setFavorite(JSON.parse(localStorage.getItem('dataCities')))
        
    }

    return (
        <ul className="favorites__list">
            {
                !cities 
                ? 'No hay información'
                : (
                     cities.map((city) => (
                        <li key={city.id}>
                            <div>
                            {city.name}
                            </div>
                            <div>
                                <button onClick={() => deleteFavorite(city.id)}>x</button>
                            </div>
                        </li>
                    )) 
                    )
            }
        </ul>
    )
}

export default FavoriteList
