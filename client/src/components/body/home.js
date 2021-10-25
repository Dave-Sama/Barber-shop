import React from 'react'
import '../../css/home.css'
import HomeImage from '../../static/home-image.jpg'

const Home = () => {
	return (
		<div className='home-container'>
			<div>
				<img src={HomeImage} alt='home-image' className='home-image' />
			</div>
			<div className='part1'>
				<h1 className='header'>Men's haircuts and hairstyles.</h1>
				<p className='description'>
					The barber shop used to be more than just a place to get a new
					hairstyle or a fresh cut - it was a community center.
				</p>
				<div className='buttons'>
					<button className='btn1'>About Us</button>
					<button className='btn2'>Call Back</button>
				</div>
			</div>
		</div>
	)
}

export default Home
