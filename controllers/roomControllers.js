import RoomModel from '../models/roomModel.js'

export const getRooms = (_,res) => {
    RoomModel
        .find()
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
    const room = new RoomModel(req.body)

    room.findOneAndUpdate({_id: req.params.id}, room)
    .then(() => {
        res.status(201).json('La chambre à bien été modifier')
    })
    .catch((error) => {
        res.status(400).send(error)
    })
}

export const deleteRooms = (req,res) => {
    res.send({
        name: "Suppression d'une chambre"
    })
}

export const getOneRoom = (req,res) => {
    res.send({
        name: "Affichage d'une chambre"
    })
}