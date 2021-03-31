import passport from 'passport'
import { Strategy } from 'passport-local'
import UserModel from '../models/userModel.js'
import JWT from 'passport-jwt'
const { Strategy: JWTStrategy, ExtractJwt } = JWT

/**
 * register
 */
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

/**
 * Login
 */
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

/**
 * Create token
 */
passport.use(
    new JWTStrategy(
        {
            secretOrKey: 'mamamia',
            jwtFromRequest: ExtractJwt.fromUrlQueryParameter('token')
        },
        async (token,done) => {
            try {
                return done(null, token.user)
            } catch (error) {
                done(error)                
            }
        }
    )
)

export default passport