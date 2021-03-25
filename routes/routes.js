import express from 'express'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

const router = express.Router()
const app = express()


const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: 'Library API',
            version: '1.0.0'
        }
    },
    apis: ['./routes/routes.js'],
}

const swaggerDocs = await swaggerJsDoc(swaggerOptions)

router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

/**
 * @swagger
 * /books:
 *    get:
 *      description: Get all books
 *      responses: 
 *          '200': 
 *            description: Success
 */
router.get('/books', (req,res) => {
    res.send('hello world')
})

export default router