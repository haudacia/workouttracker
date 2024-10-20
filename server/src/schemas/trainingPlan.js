import { Schema, model } from 'mongoose';

const trainingPlanSchema = new Schema
    ({
        name: { type: String },
        dateStart: { type: Date },
        dateEnd: { type: Date },
        duration: Number,
        workoutSplit:
            [
                // {
                //     name: String,
                //     target: String,
                //     exercises: [
                //         {
                //             name: String,
                //             sets: Number,
                //             repsMin: Number,
                //             repsMax: Number
                //         }
                //     ]
                // }
            ]
    });

const TrainingPlan = model("TrainingPlan", trainingPlanSchema);

export default TrainingPlan;

// more complex version to be implemented after testing object creation
// [{
//     name: {
//         type: String,
//         default: "mesocycle"
//     },
//     split: {
//         type: String,
//         default: 'A'
//     },
//     exercises: [{
//         exercise: {
//             name: {
//                 type: String
//             },
//             reps: {
//                 type: Number
//             },
//             sets: {
//                 type: Number
//             },
//             weightload: {
//                 type: Number
//             }
//         }
//     }],
// }]