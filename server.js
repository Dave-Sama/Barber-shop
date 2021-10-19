const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('express-async-errors')

const app = express()

app.get('/api/customers', cors(), (req, res) => {
	const customers = [
		{ id: 1, firstName: 'John', lastName: 'Doe' },
		{ id: 2, firstName: 'Brad', lastName: 'Traversy' },
		{ id: 3, firstName: 'Mary', lastName: 'Swanson' },
	]

	res.json(customers)
})

const port = 5000

app.listen(port, () => `Server running on port ${port}`)
