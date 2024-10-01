import Gym from "../models/gym.model.js";

export const gymControllerList = (req, res)=> {
    res.send("GET");
}

export const gymControllerCreate = async (req, res)=> {
    
    const newGym = new Gym({
        name: req.body.name,
        desc: req.body.desc,
    });

    try {
        await newGym.save();
        return res.status(201).json(newGym)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

export const gymControllerUpdate = (req, res)=> {
    res.send("PUT");
}

export const gymControllerDelete = (req, res)=> {
    res.send("DELETE");
}
