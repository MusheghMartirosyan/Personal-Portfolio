import './Nav.css'
import {HiOutlineHome} from 'react-icons/hi'
import {BiUser, BiBook, BiHeart, BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
    const [navActive, setNavActive] = useState('#')
    return(
        <nav>
            <NavLink to='https://musheghmartirosyan.github.io/Portfolio/' className={({isActive}) => isActive ? 'active' : ''}><HiOutlineHome /></NavLink>
            <NavLink to='https://musheghmartirosyan.github.io/Portfolio/about' className={({isActive}) => isActive ? 'active' : ''}><BiUser /></NavLink>
            <NavLink to='https://musheghmartirosyan.github.io/Portfolio/experience' className={({isActive}) => isActive ? 'active' : ''}><BiBook /></NavLink>
            <NavLink to='https://musheghmartirosyan.github.io/Portfolio/portfolio' className={({isActive}) => isActive ? 'active' : ''}><BiHeart /></NavLink>
            <NavLink to='https://musheghmartirosyan.github.io/Portfolio/contact' className={({isActive}) => isActive ? 'active' : ''}><BiMessageSquareDetail /></NavLink>
        </nav>
    )
}

export default Nav