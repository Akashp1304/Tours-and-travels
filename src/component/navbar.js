import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import {  useAuth0 } from "@auth0/auth0-react";


function Navbar() {
    const { loginWithRedirect,isAuthenticated } = useAuth0();
    const { logout } = useAuth0();
    return (
        <nav className='NavbarIteams'>

            <h1 className='navbar-logo text'><i class="fa-solid fa-earth-asia tech"></i><strong>Travel</strong></h1>

            <ul className='nav-menu'>
                <li>
                    <Link to='/' className='nav-links'>
                        <i className="fa-solid fa-house-user"></i>Home</Link>
                </li>
                <li>
                    <Link to='/Service' className='nav-links'>
                        <i class="fa-solid fa-briefcase"></i>Service</Link>
                </li>


                <li>
                    <Link to='Contact' className='nav-links'>
                        <i class="fa-solid fa-address-book"></i>Contact</Link>
                </li>
                <li>
                    <Link to='/About' className='nav-links'>
                        <i class="fa-solid fa-circle-info"></i>About</Link>
                </li>
                {isAuthenticated ? (
                    <li>
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Log Out
                        </button>
                    </li>
                ) : (
                    <li>
                    <button onClick={() => loginWithRedirect()}>Log In</button>
                </li>
                )
            
            }
                

                {/* <li>
                    <Link><button >Sign up</button></Link>
                </li> */}


            </ul>


        </nav>
    )
}
export default Navbar;