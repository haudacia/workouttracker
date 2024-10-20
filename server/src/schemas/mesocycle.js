import mongoose, { Schema, model } from 'mongoose'

const mesocycle = new Schema({
    name: String,
    target: String,
    exercises:
        [
            { type: Schema.Types.ObjectId, ref: 'Exercise' }
        ]
})

const Mesocycle = model('Mesocycle', mesocycle)

export default Mesocycle