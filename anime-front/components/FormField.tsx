import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { Field } from 'formik'

import { Props } from '../types/components/FormField'
import { FormField } from '../types/components/SelectFile'
import isErrors from '../utills/isErrors'

const FormField = ({ name, errorsArray, label, type, placeHolder }: Props) => {
  return (
    <Field name={name}>
      {({ field }: FormField) => (
        <FormControl isInvalid={isErrors(errorsArray)}>
          <FormLabel>{label}</FormLabel>
          <Input
            type={type}
            placeholder={placeHolder}
            bg='white'
            borderColor='base'
            h={{ base: '35px', md: '55px' }}
            {...field}
          />
          {isErrors(errorsArray) ? <FormErrorMessage>{errorsArray[0]}</FormErrorMessage> : null}
        </FormControl>
      )}
    </Field>
  )
}

export default FormField
