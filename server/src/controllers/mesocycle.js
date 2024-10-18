import Mesocycle from '../schemas/mesocycle'
import Exercise from './exercise'

const createMesocycle = async (req, res) => {
    try {
        const { name, target, exercises } = req.body
        const newMesocycle = await Mesocycle.create({ name, target, exercises })
        res.status(201).json(newMesocycle)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error creating mesocycle' });
    }
};

const getMesocycle = async (req, res) => {
    try {
        const { id } = req.params;
        const mesocycle = await Mesocycle.findById(id).populate('exercises');

        if (!mesocycle) {
            return res.status(404).json({ message: 'Mesocycle not found' })
        }
        res.status(200).json(mesocycle)
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving mesocycle' })
    }
};

const deleteMesocycle = async (req, res) => {
    const { id } = req.params;

};

const updateMesocycle = async (req, res) => {
    const { id } = req.params;

};

export { createMesocycle, getMesocycle }