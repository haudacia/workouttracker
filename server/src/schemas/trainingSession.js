import { Schema, model } from 'mongoose';
import Exercise from 'exercise.js'

const trainingSessionSchema = new Schema
    ({
        datetime: { type: Date },
        mesocycle: { type: Schema.Types.ObjectId, ref: 'Mesocycle' },
        exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }],
        /* here, I must reference the "absolute" object of each exercise performed
    PLUS the reps,sets and weightloads used?*/
        done: { type: Boolean, default: False }
    })

const TrainingSession = model('TrainingSession', trainingSessionSchema)

export default TrainingSession