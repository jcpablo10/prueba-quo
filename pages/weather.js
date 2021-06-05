import React from 'react'
import Layout from '../Components/layout.js'
import WeatherList from '../Components/WeatherList'

const weather = () => {
    return (
        <Layout>
            <div>
                <h1>Wheather List</h1>
            </div>
            <WeatherList />
        </Layout>
    )
}

export default weather
