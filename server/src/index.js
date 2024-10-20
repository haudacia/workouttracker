import express from 'express';
import cors from 'cors';
import { createTrainingPlan, getTrainingPlan, getAllTrainingPlans, updateTrainingPlan } from './controllers/trainingPlan.js';
import { connectDB } from "../mongoConnection/index.js";
import { getAllExercises, logExercise, updateExercise } from './controllers/exercise.js';
import { getTrainingSession, createTrainingSession, updateTrainingSession } from './controllers/trainingSession.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

connectDB().then(() => console.log('connected to database'));

// const router = express.Router();

app.post('/trainingPlan', createTrainingPlan);
app.get('/trainingPlan', getAllTrainingPlans);
app.get('/trainingPlan/:id', getTrainingPlan);
app.patch('/trainingPlan/:id', updateTrainingPlan);

app.post('/exercise', logExercise);
app.get('/exercise', getAllExercises);
app.patch('/exercise', updateExercise)

app.get('/trainingSession', getTrainingSession);
app.post('/trainingSession', createTrainingSession);
app.patch('/trainingSession', updateTrainingSession);
// app.delete('/trainingSession', deleteTrainingSession);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});