import viteLogo from '/vite.svg'
import { createWorkoutPlan } from './utils/api'
import WorkoutPlan from './components/WorkoutPlan';

const handleCreateWorkoutPlan = () => {
  const data = {
    name: 'bla',
    dateStart: Date.now(),
    dateEnd: Date.parse('30 Nov 2024 00:00:00 GMT'),
    workoutSplit:
      [
        {
          name: 'meso A',
          target: 'glutes and hamstrings',
          exercises: [
            {
              name: 'deadlift',
              sets: 3,
              repsMin: 5,
              repsMax: 10,
            },
            {
              name: 'barbell unilateral hip thrust',
              sets: 3,
              repsMin: 5,
              repsMax: 10,
            },
          ],
        },
        {
          name: 'meso B',
          exercises: [
            {
              name: 'kickbacks',
              sets: 3,
              repsMin: 5,
              repsMax: 10,
            },
          ],
        },
      ],
  };
  console.log(data, 'sending to api');
  createWorkoutPlan(data)
}

function App() {
  return (
    <>
      <div>
        <button onClick={() => handleCreateWorkoutPlan()
        }>criar workout plan</button>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <div id='workout-plan'>
          <WorkoutPlan />

        </div>
      </div>
    </>
  )
}

export default App
