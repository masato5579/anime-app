import axios from 'axios'

export const Server = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDOPOINT,
  responseType: 'json',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const ServerForFile = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDOPOINT,
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})

export const apiServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDOPOINT,
  responseType: 'json',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const apiServerForfile = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDOPOINT,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})
