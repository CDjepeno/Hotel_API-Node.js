import RoomModel from '../models/roomModel.js'

export const getRooms = (_,res) => {
    RoomModel
        .find({})
        .then((rooms) => {
            res.status(200).send(rooms)
        })
        .catch((error) => {
            res.status(500).send(error)
        })
}

export const addRoom =  (req, res) => {
    const room = new RoomModel(req.body)
    room
        .save()
        .then(() => {
            res.send(room)
        })
        .catch((error) => {
            res.status(500).send(error)
        })
}

export const updateRoom = (req,res) => {
    RoomModel
        .findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.status(201).json('La chambre à bien été modifier')
        })
        .catch((error) => {
            res.status(400).send(error)
        })
}

export const deleteRooms = (req,res) => {
    RoomModel
        .findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(200).json('La chambre à bien été supprimer')
        })
        .catch((error) => {
            res.status(400).send(error)
        })
}

export const getOneRoom = (req,res) => {
    RoomModel
        .findById({_id: req.params.id})
        .then((room) => {
            res.status(200).send(room)
        })
        .catch((err) => {
            res.status(404).send('Aucune chambre trouvée.')
        })
}