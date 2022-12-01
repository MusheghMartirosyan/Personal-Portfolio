import './Nav.css'
import {HiOutlineHome} from 'react-icons/hi'
import {BiUser, BiBook, BiHeart, BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
    const [navActive, setNavActive] = useState('#')
    return(
        <nav>
            <NavLink to='/' className={({isActive}) => isActive ? 'active' : ''}><HiOutlineHome /></NavLink>
            <NavLink to='/about' className={({isActive}) => isActive ? 'active' : ''}><BiUser /></NavLink>
            <NavLink to='/experience' className={({isActive}) => isActive ? 'active' : ''}><BiBook /></NavLink>
            <NavLink to='/portfolio' className={({isActive}) => isActive ? 'active' : ''}><BiHeart /></NavLink>
            <NavLink to='/contact' className={({isActive}) => isActive ? 'active' : ''}><BiMessageSquareDetail /></NavLink>
        </nav>
    )
}

export default Nav