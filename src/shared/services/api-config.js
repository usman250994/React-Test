import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  // `http://192.168.1.107:3000`,
  timeout: 50000,
  // headers: {'X-Custom-Header': 'foobar'}
});