import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import routes from './routes/routes.js'
import './auth/auth.js'
import privateRoutes from './routes/privateRoutes.js'
import passport from 'passport'
dotenv.config()

const PORT = process.env.PORT || 4000
const app = express()

/**
 * Connect MongoDB
 */
 mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})


/**
 * Middlewares
 */
app
    .use(express.json())
    .use(express.json())
    .use('/private', passport.authenticate('jwt', { session: false }), privateRoutes)
    .use(routes)



app.listen(PORT, () => {
    console.log(`Listening server in PORT ${PORT}`);
})