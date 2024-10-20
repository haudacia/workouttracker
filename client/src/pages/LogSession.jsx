import { useForm } from "react-hook-form"
import { Form } from "react-router-dom"
import { api, fetchData } from "../utils/api";
import { useEffect, useState } from "react";


function LogSession() {
    const [trainingPlan, setTrainingPlan] = useState([]);
    const [exercise, setExercise] = useState();
    const [trainingSession, setTrainingSession] = useState()

    useEffect(() => {
        fetchData('/trainingPlan')
            .then(data => setTrainingPlan(data))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        fetchData('/exercise').then(data => setExercise(data)).catch(error => console.log(error))
    }, []);

    // useEffect(() => {
    //     fetchData('/trainingSession')
    //         .then(data => setTrainingSession(data))
    //         .catch(error => console.error(error));
    // }, []);

    // console.log(exercise);

    const { register, handleSubmit, watch } = useForm()

    const onSubmit = async (formData) => {
        console.log(formData)
        const data = {
            name: formData.name,
            sets:
                [
                    {
                        weightload: formData.weightload,
                        repetitions: formData.repetitions
                    }
                ]
        }
        await postExercise(data)
    };

    const postExercise = async (data) => {
        try {
            api().post('/exercise', data);
            console.log('Exercise submitted successfully')
        } catch (error) {
            console.log('Error submitting exercise:', error);
        }
    };
    const updateExercise = async (data) => {
        try {
            api().patch('/exercise', data);
            console.log('Exercise updated successfully')
        } catch (error) {
            console.log('Error updating exercise:', error);
        }
    };

    return (
        <>
            <div className="flex flex-col m-24">
                <form>
                    <button>Start</button>
                </form>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">which workout are you going to do?
                    {/* <select {...register('mesocycle')}>
                        {trainingPlan.map(plan => (
                            plan.workoutSplit.map(split => (
                                <option key={split._id} value={split.name}>{split.name} -{split.target}</option>
                            ))
                        ))}df
                    </select> */}
                    <div className="flex flex-col bg-blue-100">
                        <label>REGISTER EXERCISE</label>
                        <input placeholder="name" {...register('name')} required="True" />
                        <p>set 1</p>
                        <div className="flex flex-row">
                            <input
                                type="number"
                                {...register('repetitions')}
                                className="border-2 border-blue-700 w-12"
                            />
                            <label>reps</label>
                        </div>
                        <div className="flex flex-row">
                            <input
                                type="number"
                                {...register('weightload')}
                                className="border-2 border-blue-700 w-12"
                            />
                            <label>kg</label>
                        </div>
                    </div>
                    <input type="submit" />
                    {/* on submit sends info to compose a mongodb model for WorkoutSession*/}
                </form>
                {/* add one more set */}
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
                    {/* <p>set {(exercise?.sets).length}</p> */}
                    {/* <div className="flex flex-row">
                        <input
                            type="number"
                            {...register('repetitions')}
                            className="border-2 border-blue-700 w-12"
                        />
                        <label>reps</label>
                    </div> */}
                    {/* <div className="flex flex-row">
                        <input
                            type="number"
                            {...register('weightload')}
                            className="border-2 border-blue-700 w-12"
                        />
                        <label>kg</label>
                    </div> */}
                    {/* <input type="submit" /> */}
                </form>
            </div>
        </>
    )
}

export default LogSession
/* chose workout (meso)
           // warm up + duration
           // 1st exercise :chose which(pick from workout plan (include option to 
           deviate from it and chose from master list of exercises, but make it unnatractive)
           set1: reps & weight, set2: reps & weight and so on.
           * log time for each. NOT INCLUDED: track each set with seconds precision.\\

           // 
           */