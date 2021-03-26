import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import routes from './routes/routes.js'
import bodyParser from 'body-parser'
dotenv.config()

const PORT = process.env.PORT || 4000
const app = express()


/**
 * Middlewares
 */
app
    .use(express.json())
    .use(express.urlencoded())
    .use(bodyParser.json())
    .use(routes)

/**
 * Connect MongoDB
 */
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

app.listen(PORT, () => {
    console.log(`Listening server in PORT ${PORT}`);
})