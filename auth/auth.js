import passport from 'passport'
import { Strategy } from 'passport-local'
import UserModel from '../models/userModel.js'

passport.use(
    'register', 
    new Strategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    async (email, password, done) => {
        try {
            const user = await UserModel.create({ email, password })
            return done(null, user)
        } catch (error) {
            return done(error)
        }
    })    
)

passport.use(
    'login', 
    new Strategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    async (email, password, done) => {
        try {
            const user = await UserModel.findOne({email})

            if (!user) {
                return done(null, false, { message: 'Utilisateur non trouvé' })
            }

            const validate = await user.isValidPassword(password)

            if (!validate) {
                return done(null, false, { message: 'Un problème est survenue' })
            }

            return done(null, user, { message: 'Connexion réussie' })
        } catch (error) {
            return done(error)
        }
    })    
)

export default passport