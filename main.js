import express from 'express';
import gymRoutes from './routes/gym.route.js';
import connectDB from './lib/db.js';

const app = express();
const PORT = 64909;

connectDB();

app.get('/', (req, res)=>{
    res.json({ msg: 'Hello' });
})

// For raw json body - Data understanding middleware 
app.use(express.json());
// For form parameters
app.use(express.urlencoded({extended: true}));
// Route
app.use('/gym', gymRoutes);

app.listen(PORT, ()=> {
    console.log(`This server is running on PORT http://localhost:${PORT}`);
})