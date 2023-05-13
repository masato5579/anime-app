import { useToast } from '@chakra-ui/react'
import { AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useContext } from 'react'

import { GlobalContext } from '../context/GlobalStateProvider'
import { Errors } from '../types/Errors'
import { User } from '../types/globalState'
import { FormData } from '../types/hooks/useHandleSignUp'
import { Server, ServerForFile } from '../utills/axios'

export const useHandleSignUp = () => {
  const global = useContext(GlobalContext)
  const router = useRouter()
  const toast = useToast()

  const handleSignUp: (formData: FormData, setErrors: Dispatch<SetStateAction<Errors>>) => void = (
    formData,
    setErrors,
  ) => {
    Server.get('/sanctum/csrf-cookie').then(() => {
      ServerForFile.post('signup', formData)
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
              'サインアップに失敗しました。入力情報が間違っているかもしれません。もう一度入力してください。',
            status: 'error',
            isClosable: true,
          })
        })
    })
  }

  return {
    handleSignUp,
  }
}
