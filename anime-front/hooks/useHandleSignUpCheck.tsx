import { useToast } from '@chakra-ui/react'
import { AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'

import { Errors } from '../types/Errors'
import { Confirmed } from '../types/hooks/useHandleSignUp'
import { FormData } from '../types/hooks/useHandleSignUpCheck'
import { Server } from '../utills/axios'

export const useHandleSignUpCheck = () => {
  const router = useRouter()
  const toast = useToast()

  const handleSignUpCheck: (
    formData: FormData,
    setErrors: Dispatch<SetStateAction<Errors>>,
  ) => void = (formData, setErrors) => {
    Server.get('/sanctum/csrf-cookie').then(() => {
      Server.post('signup-check', formData)
        .then((res: AxiosResponse<Confirmed>) => {
          if (res.status === 200) {
            const pathName = '/signup/profile'
            router.push(
              {
                pathname: pathName,
                query: {
                  ...formData,
                  confirmed: res.data.confirmed,
                },
              },
              pathName,
            )
          }
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
    handleSignUpCheck,
  }
}
