import { useToast } from '@chakra-ui/react'
import { AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useContext } from 'react'

import { GlobalContext } from '../context/GlobalStateProvider'
import { Errors } from '../types/Errors'
import { User } from '../types/globalState'
import { Server } from '../utills/axios'

export const useHandleLogin = () => {
  const global = useContext(GlobalContext)
  const router = useRouter()
  const toast = useToast()

  const handleLogin: (
    email: string,
    password: string,
    setErrors: Dispatch<SetStateAction<Errors>>,
  ) => void = (email, password, setErrors) => {
    Server.get('/sanctum/csrf-cookie').then(() => {
      const formData = {
        email: email,
        password: password,
      }
      Server.post('login', formData)
        .then((res: AxiosResponse<User>) => {
          const user = res.data
          global.setState({
            ...global.state,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
              isSignedIn: true,
            },
            isAuthenticated: true,
          })
          router.push('/')
        })
        .catch((e) => {
          setErrors(e.response.data.errors)
          toast({
            title:
              'ログインに失敗しました。入力情報が間違っているかもしれません。もう一度入力してください。',
            status: 'error',
            isClosable: true,
          })
        })
    })
  }

  return {
    handleLogin,
  }
}
