import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { postData } from '../utills/postData'

const SignUp = () => {
  const router = useRouter()

  const [errors, setErrors] = useState({
    email: [],
    password: [],
  })

  /**
   * エラーがあるかどうかチェック
   * @param errorsKey
   * @returns boolean
   */
  const isErrors = (errorsKey: any) => {
    return errorsKey && errorsKey.length !== 0
  }

  /**
   * EmailとPasswordがバリデーションに引っかからないかチェックするAPIを投げる
   * @param formData
   * @param setSubmitting
   */
  const checkEmailAndPass = (formData: any, setSubmitting: any) => {
    const apiPass = 'signup-check'
    const newFormData = {
      ...formData,
      check: true,
    }
    const route = '/signup/profile'
    postData(apiPass, newFormData, router, route, setErrors)
    setSubmitting(false)
  }

  return (
    <>
      <Container maxW='600px' pt={{ base: '50px', md: '100px' }}>
        <Heading as='h1' fontSize='3xl' color='brand' m='auto' textAlign='center'>
          アニメなに見た？
        </Heading>
        <Box maxW='420px' m='auto' mt={{ base: '25px', md: '40px' }}>
          <Heading as='h2' fontSize='2xl' textAlign='center'>
            Sign Up
          </Heading>
          <Box mt={{ base: '25px', md: '50px' }}>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={(formData, { setSubmitting }) => {
                checkEmailAndPass(formData, setSubmitting)
              }}
            >
              {(props) => (
                <Form>
                  <Box>
                    <Field name='email'>
                      {({ field }: any) => (
                        <FormControl isInvalid={isErrors(errors.email)}>
                          <FormLabel>メールアドレス</FormLabel>
                          <Input
                            type='email'
                            {...field}
                            placeholder='メールアドレス'
                            bg='white'
                            borderColor='base.500'
                            h={{ base: '35px', md: '55px' }}
                          />
                          {isErrors(errors.email) ? (
                            <FormErrorMessage>{errors?.email[0]}</FormErrorMessage>
                          ) : null}
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                  <Box mt={{ base: '12px', md: '25px' }}>
                    <Field name='password'>
                      {({ field }: any) => (
                        <FormControl isInvalid={isErrors(errors.password)}>
                          <FormLabel>パスワード</FormLabel>
                          <Input
                            type='password'
                            {...field}
                            placeholder='パスワード'
                            bg='white'
                            borderColor='base.500'
                            h={{ base: '35px', md: '55px' }}
                          />
                          {isErrors(errors.password) ? (
                            <FormErrorMessage>{errors?.password[0]}</FormErrorMessage>
                          ) : null}
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                  <Button
                    mt={{ base: '25px', md: '50px' }}
                    w='100%'
                    fontSize='2md'
                    h={{ base: '35px', md: '55px' }}
                    colorScheme='brand'
                    isLoading={props.isSubmitting}
                    type='submit'
                  >
                    登録する
                  </Button>
                  <Text textAlign='center' mt={{ base: '10px', md: '20px' }} fontSize='sm'>
                    すでにアカウントをお持ちの方は
                    <Link textDecoration='underline'>こちら</Link>
                  </Text>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default SignUp
