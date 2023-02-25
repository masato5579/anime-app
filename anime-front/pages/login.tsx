import { Box, Button, Container, Heading, Link, Text } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { useState } from 'react'

import FormField from '../components/FormField'
import { useHandleLogin } from '../hooks/useHandleLogin'
import { Errors } from '../types/Errors'

const Login = () => {
  const { handleLogin } = useHandleLogin()
  const [errors, setErrors] = useState({
    email: [],
    password: [],
  } as Errors)

  return (
    <>
      <Container maxW='600px' py={{ base: '50px', md: '100px' }}>
        <Heading as='h1' fontSize='3xl' color='brand.500' m='auto' textAlign='center'>
          アニメなに見た？
        </Heading>
        <Box maxW='420px' m='auto' mt={{ base: '25px', md: '40px' }}>
          <Heading as='h2' fontSize='2xl' textAlign='center'>
            Login
          </Heading>
          <Box mt={{ base: '25px', md: '50px' }}>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={(formData, { setSubmitting }) => {
                handleLogin(formData.email, formData.password, setErrors)
                setSubmitting(false)
              }}
            >
              {(props) => (
                <Form>
                  <Box>
                    <FormField
                      name='email'
                      errorsArray={errors?.email}
                      label='メールアドレス'
                      placeHolder='メールアドレス'
                      type='email'
                    />
                  </Box>
                  <Box mt={{ base: '12px', md: '25px' }}>
                    <FormField
                      name='password'
                      errorsArray={errors?.password}
                      label='パスワード'
                      placeHolder='パスワード'
                      type='password'
                    />
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
                    ログインする
                  </Button>
                </Form>
              )}
            </Formik>
            <Text textAlign='center' mt={{ base: '10px', md: '20px' }} fontSize='sm'>
              アカウントを登録がお済みでない方は、
              <Link textDecoration='underline' href='/signup'>
                こちら
              </Link>
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Login
