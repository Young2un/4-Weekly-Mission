import axios from 'axios';
import { API } from '../constants/api';

const instance = axios.create({
  baseURL: API.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
