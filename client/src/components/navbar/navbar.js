import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

const Navbar = () => {
	return (
		<Router>
			<nav className='navbar'>
				<div className='navbar-container container'>
					<Link to='/' className='navbar-log'>
						<p>Dark Barber</p>
					</Link>
				</div>
			</nav>
		</Router>
	)
}

export default Navbar
