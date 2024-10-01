export const gymControllerList = (req, res)=> {
    res.send("GET");
}

export const gymControllerCreate = (req, res)=> {
    
    res.json(req.body);
}

export const gymControllerUpdate = (req, res)=> {
    res.send("PUT");
}

export const gymControllerDelete = (req, res)=> {
    res.send("DELETE");
}
