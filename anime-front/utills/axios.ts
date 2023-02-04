import axios from 'axios'

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDOPOINT,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const Client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDOPOINT,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const apiClientForfile = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDOPOINT,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})

export const apiServer = axios.create({
  baseURL: process.env.API_ENDOPOINT,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
})
