import { Schema, model } from mongoose;

const ExerciseSchema = new Schema({
    name: { type: String, required: True }
})

const Exercise = model('Exercise', ExerciseSchema)

export default Exercise