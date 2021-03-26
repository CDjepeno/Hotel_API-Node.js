import express from 'express'
import {config} from '../Docs-API/docs-config.js'
import {server} from '../Docs-API/docs-config.js'
import {getRooms,deleteRooms,getOneRoom,updateRoom,addRoom} from '../controllers/roomControllers.js'


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
 *    delete:
 *      description: delete room
 *      responses: 
 *          '200': 
 *            description: Success
 */
 router.delete('/api/rooms/:id', deleteRooms)

export default router