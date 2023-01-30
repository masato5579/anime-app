import { FormControl, FormErrorMessage, FormLabel, Select } from '@chakra-ui/react'
import { Field, FieldProps } from 'formik'

import { Option, Props } from '../types/components/FormSelect'
import isErrors from '../utills/isErrors'

const FormSelect = ({ name, errorsArray, placeHolder, options }: Props) => {
  return (
    <Field name={name}>
      {({ field }: FieldProps<string>) => (
        <FormControl isInvalid={isErrors(errorsArray)}>
          <FormLabel>年齢</FormLabel>
          <Select
            placeholder={placeHolder}
            bg='white'
            borderColor='base.500'
            h={{ base: '35px', md: '55px' }}
            {...field}
          >
            {options.map(
              (option: Option, index: number): JSX.Element => (
                <option key={index} value={option.value}>
                  {option.viewValue}
                </option>
              ),
            )}
          </Select>
          {isErrors(errorsArray) ? <FormErrorMessage>{errorsArray[0]}</FormErrorMessage> : null}
        </FormControl>
      )}
    </Field>
  )
}

export default FormSelect
