import { Schema, model } from "mongoose";

const gymSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: [true, 'Name should be unique'], // This will NOT WORK as unique doesn't have direct validation triggers
    },
    desc: {
        type: String,
        required: [true, 'Name is required'],
    }
});

const Gym = model('Gym', gymSchema)

export default Gym;