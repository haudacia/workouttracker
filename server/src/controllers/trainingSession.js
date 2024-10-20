import TrainingSession from "../schemas/trainingSession.js";

export const createTrainingSession = async (req, res) => {
    const body = req.body
    try {
        const newTrainingSession = await TrainingSession.create(body)
        res.status(201).send(newTrainingSession)
    } catch (error) {
        res.status(500).send({ message: 'Error creating training session' })
    }
};


export const getTrainingSession = (req, res) => {
    const { id } = req.params;
    TrainingSession.findById(id)
        .then(trainingSessions => {
            res.json(trainingSession); // Retorna os documentos encontrados
        })
        .catch(error => {
            console.error('Error fetching training session:', error);
            res.status(500).json({ message: 'Error fetching training session' });
        });
};

export const updateTrainingSession = (req, res) => {
    const { id } = req.params;
    TrainingSession.findByIdAndUpdate(id, body, { new: true })
        .then(trainingSession => {
            res.status(201).json(trainingSession);
        })
        .catch(error => {
            console.error('error updating training session', error);
            res.status(500).json({ message: 'error updating training session' });
        });
};

export const deleteTrainingSession = (req, res) => {
    const { id } = req.params;
    TrainingSession.findByIdAndDelete(id, body, { new: true })
        .catch(error => {
            console.error('error deleting training session', error);
            res.status(500).json({ message: 'error deleting training session' });
        });
};
