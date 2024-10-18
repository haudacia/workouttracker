import viteLogo from '/vite.svg'
import { createWorkoutPlan } from './utils/api'
import WorkoutPlan from './components/WorkoutPlan';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Homepage from './pages/Homepage';
import LogSession from './pages/LogSession';

const handleCreateWorkoutPlan = () => {
  const data = {
    name: 'my workout plan',
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/home' element={<Homepage />} />
      <Route path='/my-workout-plans' element={<WorkoutPlan />} />
      <Route path='/log-session' element={<LogSession />} />
    </Route>
  )
);


function App() {
  return <RouterProvider router={router} />;
}

export default App
