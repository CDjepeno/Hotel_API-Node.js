import express from 'express'
import dotenv from 'dotenv'
import routes from './routes/routes.js'
import swagger from './routes/routes.js'


dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

/**
 * Middlewares
 */
app
    .use(routes)
    .use(swagger)
    .use(express.json())

app.listen(PORT, () => {
    console.log(`Listening server in PORT ${PORT}`);
})