import { useEffect, useState } from "react";
import { api } from "../utils/api";
import { fetchTrainingPlans } from "../utils/api";
import { formatDate } from "../utils/utils";
import { NavLink } from "react-router-dom";


function WorkoutPlan() {
    const [workoutPlan, setWorkoutPlan] = useState([]);

    useEffect(() => {
        fetchTrainingPlans()
            .then(data => setWorkoutPlan(data))
            .catch(error => console.error(error));
    }, []);

    console.log(workoutPlan);

    return (
        <div className="flex flex-col bg-blue h-screen mx-24 mb-0 m-auto gap-12">
            <NavLink to='/home' className='text-3xl mt-24'>{'<<'} home</NavLink>
            {
                workoutPlan.map
                    (plan => (
                        <div key={plan._id} className=''>
                            <h1 key={plan._id}>{plan.name}</h1>
                            <ul>
                                <li>{formatDate(plan.dateStart, true)}</li>
                                <li>{formatDate(plan.dateEnd)}</li>
                                <li>
                                    {plan.workoutSplit.map((split) => (
                                        <div key={split._id} className=''>
                                            <h3>{split.name}</h3>
                                            <p>{split.target}</p>
                                            {/* <li>
                                                {split.exercises.map((exercise) => (
                                                    <div key={exercise._id} className='flex flex-row'>
                                                        <p>{exercise.name} /</p>
                                                        <p>/ {exercise.sets} //</p>
                                                        <p>{exercise.repsMin} - {exercise.repsMax}</p>

                                                    </div>
                                                ))}
                                            </li> */}
                                        </div>
                                    ))}
                                </li>
                            </ul>
                        </div>
                    ))
            }
        </div>
    )
}

export default WorkoutPlan