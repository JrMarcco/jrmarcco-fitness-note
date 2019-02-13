import axios from 'axios';

const Axios = axios.create();
Axios.interceptors.response.use(({data}) => data);

export default Axios;
