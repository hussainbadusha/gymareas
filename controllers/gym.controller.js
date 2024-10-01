import Gym from "../models/gym.model.js";

export const gymControllerList = async (req, res)=> {    
    try {
        const Gyms = await Gym.find();
        res.json(Gyms);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const gymControllerDetails = async (req, res)=> {    
    try {
        const OldGym = await Gym.findOne({_id: req.params.id});
        if (OldGym == null) {
            res.status(404, 'No gym found').json({status: '404 error'});
        }else{
            res.status(200).json(OldGym);
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const gymControllerCreate = async (req, res)=> {
    
    const newGym = new Gym({
        name: req.body.name,
        desc: req.body.desc,
    });

    try {
        await newGym.save();
        res.status(201).json(newGym)
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const gymControllerUpdate = async (req, res)=> {
    try {
        const OldGym = await Gym.findById(req.params.id);
        if (OldGym == null) {
            res.status(404, 'No gym found').json({status: '404 error'});
        }else{
            OldGym.name = req.body.name;
            OldGym.desc = req.body.desc;
            await OldGym.save();
            res.status(200).json(OldGym);
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const gymControllerDelete = async (req, res)=> {
    try {
        const OldGym = await Gym.findById(req.params.id);
        
        if (OldGym == null) {
            res.status(404, 'No gym found').json({status: '404 error'});
        }else{
            await Gym.deleteOne({ _id: req.params.id});
            res.status(200).json({status: 'deleted'});
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
