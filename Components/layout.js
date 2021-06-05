import Head from 'next/head'
import Navbar from './Navbar.js'
import FavoritesContext from '../context/favorites.js'

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>Prueba Quo</title>
            </Head>
            
           <Navbar />
            <main>
                {children}
            </main>
        </div>
        
    )
}