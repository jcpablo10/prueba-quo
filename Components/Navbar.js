import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <ul>
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

        </div>
    )
}

export default Navbar
