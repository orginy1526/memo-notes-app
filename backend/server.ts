// 1) importing express
import express from 'express'

// 2) create app variable
const app = express()

// 3) initializing the application
app.use(express.json({ extended: false }))
app.get('/', (res, req) => res.send("Server up and running"))

// 4) port
const PORT = process.env.PORT || 8000

