import express from "express";

const app = express();
const PORT = 64909;

app.get('/', (req, res)=>{
    res.json({ msg: 'Hello' });
})

app.listen(PORT, ()=> {
    console.log(`This server is running on PORT http://localhost:${PORT}`);
})