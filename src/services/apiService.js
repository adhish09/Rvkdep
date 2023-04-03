import axios from 'axios';

const user_token = localStorage.getItem("access_token");
// http://16.170.209.177
axios.defaults.baseURL = 'http://127.0.0.1:8000'

if (user_token) axios.defaults.headers.common = {'Authorization': `Bearer ${user_token}`}

export default axios;