import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './components/body/home'
import Services from './components/body/services'

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Navbar />
				<Home />
				<Services />
			</div>
		)
	}
}

export default App
