import TrainingPlan from "../schemas/workoutSchema.js";

export const createTrainingPlan = async (req, res) => {
    console.log('Request received:', req.body);
    try {
        const body = req.body
        // const data = {
        //     name: body.name,
        //     dateStart: body.dateStart,
        //     dateEnd: body.dateEnd,
        //     duration: body.duration,
        //     workoutSplit: body.workoutSplit.map(split => ({
        //         name: split.name,
        //         target: split.target,
        //         exercises: split.exercises.map(exercise => ({
        //             name: exercise.name,
        //             sets: exercise.sets,
        //             repsMin: exercise.repsMin || null, // Pode ser opcional
        //             repsMax: exercise.repsMax || null // Pode ser opcional
        //         }))
        //     }))
        // };
        // const newTrainingPlan = await TrainingPlan.create(data);
        const newTrainingPlan = await TrainingPlan.create(body);

        res.status(201).json(newTrainingPlan)
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error creating workout plan' });
    }
};

export const getTrainingPlan = (req, res) => {
    const { id } = req.params;
    console.log("GET /trainingPlan called");
    TrainingPlan.findById(id)
        .then(trainingPlans => {
            res.json(trainingPlans); // Retorna os documentos encontrados
        })
        .catch(error => {
            console.error('Error fetching training plans:', error);
            res.status(500).json({ message: 'Error fetching training plans' });
        });
};

export const getAllTrainingPlans = (req, res) => {
    console.log("GET /trainingPlan called");
    TrainingPlan.find()
        .then(trainingPlans => {
            res.json(trainingPlans); // Retorna os documentos encontrados
        })
        .catch(error => {
            console.error('Error fetching training plans:', error);
            res.status(500).json({ message: 'Error fetching training plans' });
        });
};

export const updateTrainingPlan = (req, res) => {
    const { id } = req.params;
    TrainingPlan.findByIdAndUpdate(id, body, { new: true })
        .then(trainingPlan => {
            res.status(201).json(trainingPlan);
        })
        .catch(error => {
            console.error('error updating training plan', error);
            res.status(500).json({ message: 'error updating training plan' });
        });
};