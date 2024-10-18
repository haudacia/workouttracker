import { useForm } from "react-hook-form"
import { Form } from "react-router-dom"
import { fetchTrainingPlans } from "../utils/api";
import { useEffect, useState } from "react";


function LogSession() {
    const [workoutPlan, setWorkoutPlan] = useState([]);

    useEffect(() => {
        fetchTrainingPlans()
            .then(data => setWorkoutPlan(data))
            .catch(error => console.error(error));
    }, []);

    console.log(workoutPlan);
    const {
        register,
        handleSubmit,
        watch
    } = useForm()

    return (
        <>
            <div className="flex flex-col m-24">
                <button>Start</button>

                <form onSubmit={handleSubmit} className="flex flex-col gap-8">which workout are you going to do?
                    <select {...register('mesocycle')}>
                        {workoutPlan.map(plan => (
                            plan.workoutSplit.map(split => (
                                <option key={split._id} value={split.name}>{split.name} - {split.target}</option>
                            ))
                        ))}
                        {/* <option value='mesoA'>A {meso_name}</option>
                        <option value='mesoB'>B {meso_name}</option>
                        <option value='mesoC'>C {meso_name}</option> */}
                    </select>
                    <div className="flex flex-row">
                        <input type="number" {...register('weightload')} className="border-2 border-blue-300" />
                        <label>kg</label>
                    </div>
                    <input type="submit" />
                    {/* on submit sends info to compose a mongodb model for WorkoutSession*/}
                </form>
            </div>
        </>
    )
}

export default LogSession
/* chose workout (meso)
           // register day and time (minutes precision)
           // warm up + duration
           // 1st exercise :chose which(pick from workout plan (include option to 
           deviate from it and chose from master list of exercises, but make it unnatractive)
           set1: reps & weight, set2: reps & weight and so on.
           * log time for each. NOT INCLUDED: track each set with seconds precision.\\

           // 
           */