import express from 'express';
import cors from 'cors';
import { createTrainingPlan, getTrainingPlan, getAllTrainingPlans, updateTrainingPlan } from './controllers/trainingPlan.js';
import { connectDB } from "../mongoConnection/index.js";
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

connectDB().then(() => console.log('connected to database'));

// const router = express.Router();

app.post('/trainingPlan', createTrainingPlan);
app.get('/trainingPlan', getAllTrainingPlans);
app.get('/trainingPlan/:id', getTrainingPlan);
app.patch('/trainingPlan/:id', updateTrainingPlan)


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});