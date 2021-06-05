import React from 'react'
import Layout from '../Components/layout.js'
import FavoriteList from '../Components/FavoriteList.jsx'

const favorites = () => {

    return (
        <Layout>
            <div>
                <h1>Favorites</h1>
                <FavoriteList />
            </div>

        </Layout>
    )
}

export default favorites
