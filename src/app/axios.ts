import axios from 'axios'

export const publicAxios = axios.create({
  // baseURL: process.env.REACT_APP_SERVER_URL,
  baseURL: 'http://localhost:5000/',
  headers: {
    'Content-type': 'application/json',
  },
})
