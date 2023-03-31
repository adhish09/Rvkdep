import axios from 'axios';

const user_token = localStorage.getItem("access_token");

axios.defaults.baseURL = 'http://16.170.209.177'

if (user_token) axios.defaults.headers.common = {'Authorization': `Bearer ${user_token}`}

export default axios;