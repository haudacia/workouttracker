const router = express.Router();
import { createTrainingPlan } from '../src/controllers/trainingPlan';


// router.get('/trainingPlan', createTrainingPlan);
router.post('/trainingPlan', createTrainingPlan);