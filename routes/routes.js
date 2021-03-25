import express from 'express'
import {config} from '../Docs-API/docs-config.js'
import {server} from '../Docs-API/docs-config.js'
import {getRooms,deleteRooms,getOneRoom,updateRooms,postRooms} from '../controllers/roomControllers.js'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

// const room = require('../controllers/roomControllers.js')

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
 * /rooms/:id:
 *    get:
 *      description: update room
 *      responses: 
 *          '200': 
 *            description: Success
 */
 router.put('/rooms', updateRooms)

/**
 * @swagger
 * /rooms:
 *    post:
 *      description: post room
 *      responses: 
 *          '201': 
 *            description: Success
 */
router.post('/rooms', postRooms)

/**
 * @swagger
 * /rooms/:id:
 *    put:
 *      description: get room
 *      responses: 
 *          '200': 
 *            description: Success
 */
 router.get('/rooms', getOneRoom)


/**
 * @swagger
 * /rooms/:id:
 *    delete:
 *      description: delete room
 *      responses: 
 *          '200': 
 *            description: Success
 */
 router.delete('/rooms', deleteRooms)

export default router