import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (

        <nav className="pet-navbar">

            <div className="nav-container">


                <Link 
                    to="/" 
                    className="pet-logo"
                >
                    🐾 PawCare
                </Link>


                <ul className="pet-nav-links">

                    <li>
                        <Link to="/add-boarding">
                            🐶 Add Boarding
                        </Link>
                    </li>


                    <li>
                        <Link to="/view-boarding">
                            📋 View Boardings
                        </Link>
                    </li>


                </ul>


            </div>

        </nav>

    )

}

export default NavBar