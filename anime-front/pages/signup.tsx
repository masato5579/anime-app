import { Box, Button, Container, Heading, Link, Text } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { useState } from 'react'

import FormField from '../components/FormField'
import { useHandleSignUpCheck } from '../hooks/useHandleSignUpCheck'
import { Errors } from '../types/Errors'
import { FormData } from '../types/hooks/useHandleSignUpCheck'

const SignUp = () => {
  const { handleSignUpCheck } = useHandleSignUpCheck()

  const [errors, setErrors] = useState({
    email: [],
    password: [],
  } as Errors)

  /**
   * EmailとPasswordがバリデーションに引っかからないかチェックするAPIを投げる
   * @param {object} formData
   * @param {Function} setSubmitting
   * @return {void}
   */
  const checkEmailAndPass = (
    formData: FormData,
    setSubmitting: (isSubmitting: boolean) => void,
  ): void => {
    const newFormData = {
      ...formData,
      emailAndPassCheck: true,
    }
    handleSignUpCheck(newFormData, setErrors)
    setSubmitting(false)
  }

  return (
    <>
      <Container maxW='600px' py={{ base: '50px', md: '100px' }}>
        <Heading as='h1' fontSize='3xl' color='brand.500' m='auto' textAlign='center'>
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
                    <FormField
                      name='email'
                      errorsArray={errors.email}
                      label='メールアドレス'
                      placeHolder='メールアドレス'
                      type='email'
                    />
                  </Box>
                  <Box mt={{ base: '12px', md: '25px' }}>
                    <FormField
                      name='password'
                      errorsArray={errors.password}
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
                    登録する
                  </Button>
                  <Text textAlign='center' mt={{ base: '10px', md: '20px' }} fontSize='sm'>
                    すでにアカウントをお持ちの方は
                    <Link textDecoration='underline' href='/login'>
                      こちら
                    </Link>
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
