import express from 'express'
import {config} from '../Docs-API/docs-config.js'
import {server} from '../Docs-API/docs-config.js'
import {getRooms,deleteRooms,getOneRoom,updateRoom,addRoom} from '../controllers/roomControllers.js'
import passport from 'passport'
import { register } from '../controllers/userController.js'
import jwt from 'jsonwebtoken'



const router = express.Router()
const app = express()

router.use('/api-docs', server, config)


router.get('/', (_,res) => {
    res.send('home page')
})

/**
 * @swagger
 * /rooms:
 *    get:
 *      description: Get all rooms
 *      responses: 
 *          '200': 
 *            description: Success
 */
router.get('/api/rooms', getRooms)


/**
 * @swagger
 * /rooms/:id:
 *    put:
 *      description: get room
 *      responses: 
 *          '200': 
 *            description: Success
 */
 router.get('/api/rooms/:id', getOneRoom)

 
/**
 * @swagger
 * /rooms/:id:
 *       put:
 *         description: update room
 *         parameters:
 *         - name: name
 *           description: name of the room
 *           in: formData
 *           required: true
 *           type: String
 *         - name: maxPersons
 *           description: person number
 *           in: formData
 *           required: true
 *           type: Number
 *         responses: 
 *             '200': 
 *               description: Success
 */
 router.put('/api/rooms/:id', updateRoom)


/**
 * @swagger
 * /rooms:
 *  post:
 *     description: post room
 *     parameters:
 *     - name: name
 *       description: name of the room
 *       in: formData
 *       required: true
 *       type: String
 *     - name: maxPersons
 *       description: person number
 *       in: formData
 *       required: true
 *       type: Number
 *     responses: 
 *         '201': 
 *           description: Success
 */
router.post('/api/rooms', addRoom)



router.post('/register', passport.authenticate('register', { session: false }), register)


router.post('/login', ('login', (req, res, next) => {
    passport.authenticate('login', async (err,user) => {
        try {
            if (err || !user) {
                const error = new Error('Une erreur est survenue')
                return next(error)
            }

            req.login(user, { session: false }, async error => {
                if (error) return next(error)

                const body = {_id: user._id, email: user.email }

                const token = jwt.sign({user: body}, 'mamamia')

                res.json({ token })
            })
        } catch (error) {
            return next(error)
        }
    })(req, res, next)
}))

/**
 * @swagger
 * /rooms/:id:
 *    delete:
 *      description: delete room
 *      responses: 
 *          '200': 
 *            description: Success
 */
 router.delete('/api/rooms/:id', deleteRooms)

export default router