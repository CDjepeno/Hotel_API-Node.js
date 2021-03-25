export const getRooms = (_,res) => {
    res.json({
        name: 'Les suite présidentiels sont super'
    })
}

export const postRooms = (req,res) => {
    res.send(req.body)
}

export const updateRooms = (req,res) => {
    res.send({
        name: "Modification d'une chambre"
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