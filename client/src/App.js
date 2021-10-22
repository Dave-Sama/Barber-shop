import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Customers from './components/customers'
import Navbar from './components/navbar/navbar'

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Navbar />
			</div>
		)
	}
}

export default App
