import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/weather">
                        <a>
                            Weather
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/favorites">
                        <a>
                            Favorites
                        </a>
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
