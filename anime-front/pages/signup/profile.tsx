import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import FormField from '../../components/FormField'
import FormSelect from '../../components/FormSelect'
import SelectFile from '../../components/SelectFile'
import { useHandleSignUp } from '../../hooks/useHandleSignUp'
import { ageOptions, sexOptions } from '../../static/options'
import { fileInfo } from '../../types/components/SelectFile'
import { Errors } from '../../types/Errors'

const Profile = () => {
  const router = useRouter()
  const { handleSignUp } = useHandleSignUp()

  useEffect(() => {
    if (!router.query.confirmed) {
      router.push('/signup')
    }
  }, [router])

  const [errors, setErrors] = useState({
    name: [],
    age: [],
    sex: [],
    image: [],
  } as Errors)

  const [fileInfo, setFile] = useState({
    base64: null,
    file: null,
  } as fileInfo)

  return (
    <>
      <Container maxW='600px' py={{ base: '50px', md: '100px' }}>
        <Heading as='h2' fontSize='2xl' color='brand' m='auto' textAlign='center'>
          プロフィール設定
        </Heading>
        <Box maxW='420px' m='auto' mt={{ base: '25px', md: '50px' }}>
          <Formik
            initialValues={{ name: '', age: '', sex: '', image: '' }}
            onSubmit={(formData, { setSubmitting }) => {
              const newFormData = {
                ...formData,
                email: router.query.email as string,
                password: router.query.password as string,
              }
              handleSignUp(newFormData, setErrors)
              setSubmitting(false)
            }}
          >
            {(props) => (
              <Form>
                <Box>
                  <SelectFile fileInfo={fileInfo} setFile={setFile} errors={errors} />
                </Box>
                <Box mt={{ base: '12px', md: '25px' }}>
                  <FormField
                    name='name'
                    errorsArray={errors.name}
                    label='名前'
                    placeHolder='名前'
                    type='text'
                  />
                </Box>
                <Flex justifyContent='space-between'>
                  <Box mt={{ base: '12px', md: '25px' }} w='45%'>
                    <FormSelect
                      name='age'
                      errorsArray={errors.age}
                      label='年齢'
                      placeHolder='年齢'
                      options={ageOptions()}
                    />
                  </Box>
                  <Box mt={{ base: '12px', md: '25px' }} w='45%'>
                    <FormSelect
                      name='sex'
                      errorsArray={errors.sex}
                      label='性別'
                      placeHolder='性別'
                      options={sexOptions}
                    />
                  </Box>
                </Flex>
                <Button
                  mt={{ base: '25px', md: '50px' }}
                  w='100%'
                  fontSize='2md'
                  h={{ base: '35px', md: '55px' }}
                  bg={'brand'}
                  color={'#ffffff'}
                  isLoading={props.isSubmitting}
                  type='submit'
                >
                  登録する
                </Button>
                <Text textAlign='center' mt={{ base: '10px', md: '20px' }} fontSize='sm'>
                  後で設定を変更できます。
                </Text>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </>
  )
}

export default Profile
