import React from 'react'
import Layout from '../Components/layout.js'
import WeatherList from '../Components/WeatherList'

const weather = () => {
    return (
        <Layout>
            <div>
                Wheather
            </div>
            <WeatherList />
        </Layout>
    )
}

export default weather
