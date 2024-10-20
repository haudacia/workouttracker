import Exercise from '../schemas/exercise.js'

export const logExercise = async (req, res) => {
    const body = req.body
    console.log('Request received:');

    try {
        const loggedExercise = await Exercise.create(body)
        res.status(201).json(loggedExercise)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error logging exercise' })
    }
}


export const updateExercise = async (req, res, id) => {
    const body = req.body
    try {
        const updatedExercise = await Exercise.findByIdAndUpdate(id, body, { new: true })
        res.status(201).json(updatedExercise)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error updating exercise' })
    }
}

export const getAllExercises = async (req, res) => {
    try {
        const allExercises = await Exercise.find()
        res.json(allExercises)
    } catch (error) {
        console.log('Error fetching exercises:', error);
        res.status(500).json({ message: 'Error fetching exercises', error: error.message });
    }
}