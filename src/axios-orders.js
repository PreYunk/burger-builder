import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://pk-burger.firebaseio.com/'
});

export default instance;