import React, { useState } from 'react'


const FavoriteList = () => {

    const deleteFavorite = (id) => {
        console.log(cities)
    }
    
    const localFavorites = JSON.parse(localStorage.getItem('dataCities'))

    console.log(localFavorites)

    let [cities, setCities] = useState(localFavorites)

    return (
        <ul>
            {
                cities === null
                ? 'No hay información'
                : (
                     cities.map((city) => (
                        <li key={city.key}>
                            <div>
                            {city.name}
                            </div>
                            <div>
                                <button onClick={()=> {deleteFavorite(city.id)}}>x</button>
                            </div>
                        </li>
                    )) 
                    )
            }
        </ul>
    )
}

export default FavoriteList
