import { Files } from '../ProfileNew'

export type Confirmed = {
  confirmed: true
}

export type FormData = {
  email: string
  password: string
  name: string
  age: number | string
  sex: number | string
  image: Files | string
}
