import { Schema, model } from 'mongoose';
import Exercise from 'exercise.js'

const workoutSessionSchema = new Schema
    ({
        datetime: { type: Date },
        split: { type: Schema.Types.ObjectId, ref: 'Split' },
        exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }],
        /* here, I must reference the "absolute" object of each exercise performed
    PLUS the reps,sets and weightloads used?*/
        done: { type: Boolean, default: False }
    })

const workoutSession = model('WorkoutSession', workoutSessionSchema)

export default workoutSession