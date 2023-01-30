import { Box, FormControl, FormLabel, Image, Input } from '@chakra-ui/react'
import { Field, useFormikContext } from 'formik'

import { FormField, Props } from '../types/components/SelectFile'
import isErrors from '../utills/isErrors'

const SelectFile = ({ fileInfo, setFile, errors }: Props) => {
  const { setFieldValue } = useFormikContext()

  /**
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event
   * @returns {void}
   */
  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const files = event.currentTarget.files ?? []
    if (files.length === 0) return

    const file = files[0]
    setFile({
      ...fileInfo,
      file: file,
    })

    const reader = new FileReader()
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const result = e.target?.result as string | null
      setFile({
        ...fileInfo,
        base64: result,
      })
    }

    reader.readAsDataURL(file)

    setFieldValue('image', file)
  }

  return (
    <>
      <Field name='image'>
        {({ field }: FormField) => (
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
                src={fileInfo.base64 ? fileInfo.base64 : '/no_image.jpeg'}
                m='auto'
                mt='20px'
                alt='profile_image'
              />
              <Box textAlign='center' mt='30px'>
                アップロード
              </Box>
              <Input
                {...field}
                type='file'
                height='100%'
                width='100%'
                position='absolute'
                top='0'
                left='0'
                opacity='0'
                aria-hidden='true'
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
