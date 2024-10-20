import { Schema, model } from 'mongoose';

const ExerciseSchema = new Schema({
    name: { type: String, required: true },
    sets:
        [
            {
                weightload: Number,
                repetitions: Number
            }
        ]
})

const Exercise = model('Exercise', ExerciseSchema)

export default Exercise