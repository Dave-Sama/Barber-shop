import React from 'react'
import '../../css/home.css'

const Home = () => {
	return (
		<div className='home-container'>
			<h1 className='header'>Men's haircuts and hairstyles.</h1>
			<p className='description'>
				The barber shop used to be more than just a place to get a new hairstyle
				or a fresh cut - it was a community center.
			</p>
			<div className='buttons'>
				<button className='btn1'>About Us</button>
				<button className='btn2'>Call Back</button>
			</div>
		</div>
	)
}

export default Home
