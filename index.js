const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors({
	origin: "*",
	credential: true
}))

app.get('/', (req, res) => {

	const date = new Date()

	return res.status(200).json({
		email: 'geralddestiny7@gmail.com',
		current_datetime: date.toISOString(),
		github_url: 'https://github.com/Destinygerald/Hng_2025_stage_0_task.git'
	})
})

app.listen(8000, () => {
	console.log(`Port running on Port 8000`)
})
