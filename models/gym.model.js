import { Schema, model } from "mongoose";

const gymSchema = new Schema({
    name: String,
    desc: String
});

const Gym = model('Gym', gymSchema)

export default Gym;