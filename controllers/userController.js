import UserModel from '../models/userModel.js'

export const register = async (req,res,next) => {
    res.json({
        message: 'Enregistrement validé',
        user: req.user
    })
} 
