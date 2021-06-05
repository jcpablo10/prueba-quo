import React from 'react'
import Layout from '../Components/layout.js'
import FavoriteList from '../Components/FavoriteList.jsx'

const favorites = () => {

    return (
        <Layout>
            <div>
                Favorites
                <FavoriteList />
            </div>

        </Layout>
    )
}

export default favorites
