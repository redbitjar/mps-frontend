import axios from 'axios';

// const BASE_URL = 'http://localhost:3000/api';
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const customAxios  = axios.create({
  baseURL: BASE_URL,
  params:{

  }
});

export default customAxios ;