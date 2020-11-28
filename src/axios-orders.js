import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-ee094.firebaseio.com/'
});

export default instance;