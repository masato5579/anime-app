import { Box, Container, FormControl, FormLabel, Image, Input } from '@chakra-ui/react'
import { Field, useFormikContext } from 'formik'

const SelectFile = ({ fileInfo, setFile, errors }: any) => {
  const { setFieldValue } = useFormikContext()

  const onFileInputChange = (event: any) => {
    if (event.target.files.length === 0) {
      return
    }

    setFile((fileInfo: any) => ({ ...fileInfo, object: event.currentTarget.files[0] }))

    const reader = new FileReader()

    reader.onload = (e: any) => {
      //base64形式の画像データをfileInfoに格納
      setFile((fileInfo: any) => ({ ...fileInfo, base64data: e.target.result }))
    }

    reader.readAsDataURL(event.currentTarget.files[0])

    setFieldValue('image', event.currentTarget.files !== null ? event.currentTarget.files[0] : null)
  }

  /**
   * エラーがあるかどうかチェック
   * @param {string[]} errorsKey
   * @returns {boolean}
   */
  const isErrors = (errorsKey: string[]): boolean => {
    return errorsKey ? errorsKey.length !== 0 : false
  }

  return (
    <>
      <Field name='image'>
        {({ field }: any) => (
          <FormControl isInvalid={isErrors(errors.image)}>
            <FormLabel>プロフィール画像</FormLabel>
            <Box
              borderColor='base'
              borderStyle='dashed'
              borderWidth='2px'
              position='relative'
              m='auto'
              h='250px'
            >
              <Image
                borderRadius='full'
                boxSize='150px'
                src={fileInfo.base64data ? fileInfo.base64data : '/no_image.jpeg'}
                m='auto'
                mt='20px'
              />
              <Box textAlign='center' mt='30px'>
                アップロード
              </Box>
              <Input
                type='file'
                height='100%'
                width='100%'
                position='absolute'
                top='0'
                left='0'
                opacity='0'
                aria-hidden='true'
                {...field}
                accept='image/*'
                value={undefined}
                onChange={onFileInputChange}
              />
            </Box>
          </FormControl>
        )}
      </Field>
    </>
  )
}

export default SelectFile
