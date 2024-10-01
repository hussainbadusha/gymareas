import express from 'express';
import gymRoutes from './routes/gym.route.js';

const app = express();
const PORT = 64909;

app.get('/', (req, res)=>{
    res.json({ msg: 'Hello' });
})

app.use('/gym', gymRoutes)

app.listen(PORT, ()=> {
    console.log(`This server is running on PORT http://localhost:${PORT}`);
})