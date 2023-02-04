import { Dispatch, SetStateAction } from 'react'

export type User = {
  id: number | null
  name: string | null
  email: string | null
  isSignedIn: boolean
}

export type GlobalState = {
  user: User
}

export type GlobalContext = {
  state: GlobalState
  setState: Dispatch<SetStateAction<GlobalState>>
}
