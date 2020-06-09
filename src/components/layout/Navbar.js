import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from "./SignedInLinks";
import SignedOutLink from "./SignedOutLink";

const Navbar = () => {

    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Shop registration</Link>
                <SignedInLinks />
                <SignedOutLink />
            </div>
        </nav>
    )

}

export default Navbar;
