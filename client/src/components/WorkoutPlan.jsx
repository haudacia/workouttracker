import { useEffect, useState } from "react";
import { api } from "../utils/api";
import { fetchData } from "../utils/api";
import { formatDate } from "../utils/utils";


function WorkoutPlan() {
    const [workoutPlan, setWorkoutPlan] = useState([]); // Inicializa como um array vazio

    useEffect(() => {
        fetchData()
            .then(data => setWorkoutPlan(data)) // Define os dados no estado
            .catch(error => console.error(error));
    }, []);

    console.log(workoutPlan); // Verifica o que está sendo armazenado

    return (
        <div>
            {
                workoutPlan.map
                    (plan => (
                        <div key={plan._id} className='bg-blue-100'>
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