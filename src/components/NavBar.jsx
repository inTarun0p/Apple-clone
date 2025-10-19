import React from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
    return (
        <header>
            <nav>
                <img src="../public/logo.svg" alt="" />
                <ul>
                    {navLinks.map(({ label }) => {
                        return <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    })}
                </ul>
                    <div className='items-center gap-3'>
                        <button>
                            <img src="../public/search.svg" alt="" />
                        </button>
                        <button>
                            <img src="../public/cart.svg" alt="" />
                        </button>
                    </div>

            </nav>
        </header>
    )
}

export default NavBar