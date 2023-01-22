import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import SelectFile from '../../components/SelectFile'
import { fileInfo } from '../../types/components/SelectFile'
import { Errors } from '../../types/Errors'
import isErrors from '../../utills/isErrors'
import { postData } from '../../utills/postData'

const profile = () => {
  const router = useRouter()

  useEffect(() => {
    if (!router.query.confirmed) {
      router.push('/signup')
    }
  }, [router.query])

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
      <Container maxW='600px' pt={{ base: '50px', md: '100px' }}>
        <Heading as='h2' fontSize='2xl' color='brand.500' m='auto' textAlign='center'>
          プロフィール設定
        </Heading>
        <Box maxW='420px' m='auto' mt={{ base: '25px', md: '50px' }}>
          <Formik
            initialValues={{ name: '', age: '', sex: '', image: '' }}
            onSubmit={(formData, { setSubmitting }) => {
              const newFormData = {
                ...formData,
                email: router.query.email,
                password: router.query.password,
              }
              postData(true, 'signup', newFormData, router, '/', setErrors)
              setSubmitting(false)
            }}
          >
            {(props) => (
              <Form>
                <Box>
                  <SelectFile fileInfo={fileInfo} setFile={setFile} errors={errors} />
                </Box>
                <Box mt={{ base: '12px', md: '25px' }}>
                  <Field name='name'>
                    {({ field }: any) => (
                      <FormControl isInvalid={isErrors(errors.name)}>
                        <FormLabel>名前</FormLabel>
                        <Input
                          type='name'
                          {...field}
                          placeholder='名前'
                          bg='white'
                          borderColor='base.500'
                          h={{ base: '35px', md: '55px' }}
                        />
                        {isErrors(errors?.name) ? (
                          <FormErrorMessage>{errors.name[0]}</FormErrorMessage>
                        ) : null}
                      </FormControl>
                    )}
                  </Field>
                </Box>
                <Flex justifyContent='space-between'>
                  <Box mt={{ base: '12px', md: '25px' }} w='45%'>
                    <Field name='age'>
                      {({ field }: any) => (
                        <FormControl isInvalid={isErrors(errors.age)}>
                          <FormLabel>年齢</FormLabel>
                          <Select
                            placeholder='年齢'
                            bg='white'
                            borderColor='base.500'
                            h={{ base: '35px', md: '55px' }}
                            {...field}
                          >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                          </Select>
                          {isErrors(errors.age) ? (
                            <FormErrorMessage>{errors?.age[0]}</FormErrorMessage>
                          ) : null}
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                  <Box mt={{ base: '12px', md: '25px' }} w='45%'>
                    <Field name='sex'>
                      {({ field }: any) => (
                        <FormControl isInvalid={isErrors(errors.age)}>
                          <FormLabel>性別</FormLabel>
                          <Select
                            placeholder='性別'
                            bg='white'
                            borderColor='base.500'
                            h={{ base: '35px', md: '55px' }}
                            {...field}
                          >
                            <option value={0}>男</option>
                            <option value={1}>女</option>
                            <option value={2}>どちらでもない</option>
                          </Select>
                          {isErrors(errors.age) ? (
                            <FormErrorMessage>{errors?.age[0]}</FormErrorMessage>
                          ) : null}
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                </Flex>
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

export default profile
