import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {

    return (
       <ul className="right">
           <li><NavLink to='/Register'>Register Shop</NavLink></li>
           <li><NavLink to='/'>Log Out</NavLink></li>
           <li><NavLink to='/' className='btn btn-floating orange lighten-1'>KK</NavLink></li>
       </ul>
    )

}

export default SignedInLinks;
