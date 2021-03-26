import express from 'express'
import {config} from '../Docs-API/docs-config.js'
import {server} from '../Docs-API/docs-config.js'
import {getRooms,deleteRooms,getOneRoom,updateRoom,addRoom} from '../controllers/roomControllers.js'


const router = express.Router()
const app = express()

router.use('/api-docs', server, config)


router.get('/', (_,res) => {
    res.send('hello world')
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
router.get('/rooms', getRooms)

/**
 * @swagger
 * /room/:id:
 *    get:
 *      description: update room
 *       parameters:
 *       - name: name
 *         description: name of the room
 *         in: formData
 *         required: true
 *         type: String
 *       - name: maxPersons
 *         description: name of the room
 *         in: formData
 *         required: true
 *         type: Number
 *      responses: 
 *          '200': 
 *            description: Success
 */
 router.put('/room/:id', updateRoom)


/**
 * @swagger
 * /room:
 *    post:
 *      description: post room
 *      parameters:
 *      - name: name
 *        description: name of the room
 *        in: formData
 *        required: true
 *        type: String
 *      - name: maxPersons
 *        description: name of the room
 *        in: formData
 *        required: true
 *        type: Number
 *      responses: 
 *          '201': 
 *            description: Success
 */
router.post('/room', addRoom)

/**
 * @swagger
 * /room/:id:
 *    put:
 *      description: get room
 *      responses: 
 *          '200': 
 *            description: Success
 */
 router.get('/room/:id', getOneRoom)


/**
 * @swagger
 * /room/:id:
 *    delete:
 *      description: delete room
 *      responses: 
 *          '200': 
 *            description: Success
 */
 router.delete('/room/:id', deleteRooms)

export default router