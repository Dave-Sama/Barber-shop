import React, { useState } from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FiSearch, FiShoppingCart } from 'react-icons/fi'

import '../../css/navbar.css'
function Navbar() {
	const [click, setClick] = useState(false)
	const closeMobileMenu = () => setClick(false)
	const handleClick = () => setClick(!click)
	return (
		<Router>
			<nav className='navbar'>
				<div className='navbar-container container'>
					<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
						<p className='code'>Dark Beard</p>
					</Link>
					<div className='menu-icon' onClick={handleClick}>
						{click ? <FaTimes /> : <FaBars />}
					</div>
				</div>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li className='nav-item'>
						<Link to='/' className='nav-links' onClick={closeMobileMenu}>
							Home
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/skills' className='nav-links' onClick={closeMobileMenu}>
							About Us
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/courses' className='nav-links' onClick={closeMobileMenu}>
							Services
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/courses' className='nav-links' onClick={closeMobileMenu}>
							Masters
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/courses' className='nav-links' onClick={closeMobileMenu}>
							Prices
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/courses' className='nav-links' onClick={closeMobileMenu}>
							Blog
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/courses' className='nav-links' onClick={closeMobileMenu}>
							Booking
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/courses' className='nav-links' onClick={closeMobileMenu}>
							Contacts
						</Link>
					</li>
					<li className='icons'>
						<Link to='/'>
							<FiSearch className='fi-icon' />
						</Link>
					</li>
					<li className='icons'>
						<Link to='/'>
							<FiShoppingCart className='fi-icon' />
						</Link>
					</li>
				</ul>
			</nav>
		</Router>
	)
}

export default Navbar
