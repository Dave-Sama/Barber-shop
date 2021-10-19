const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
require('express-async-errors')
const productsRouter = require('./routes/products')

// DB
const connectDB = require('./db/connect')

// errors
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.json())

app.get('/api/customers', cors(), (req, res) => {
	const customers = [
		{ id: 1, firstName: 'John', lastName: 'Doe' },
		{ id: 2, firstName: 'Brad', lastName: 'Traversy' },
		{ id: 3, firstName: 'Mary', lastName: 'Swanson' },
	]

	res.json(customers)
})

app.use('/api/v1/products', productsRouter)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
	try {
		// connect to DB
		await connectDB(process.env.MONGO_URI)
		app.listen(port, () => `Server running on port ${port}`)
	} catch (err) {
		console.log(err)
	}
}

start()
