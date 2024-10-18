import axios from 'axios';

export const api = () => {
    return axios.create({
        baseURL: import.meta.env.VITE_SERVER_URL,
        headers: {
            'Content-Type': 'application/json'
        },
    });
};

export const fetchTrainingPlans = () => {
    return api().get('/trainingPlan')
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.error('error fetching data:', error);
            throw error
        });
};


export const createWorkoutPlan = (data) => {
    console.log('Data to be saved:', data);

    api()
        .post('/trainingPlan', data)
        .then((response) => {
            if (response) {
                console.log('a new workout plan was created')
            }
            else {
                console.error('error creating object');
            }
        }).catch((error) => console.error('Error creating form:', error))
};
