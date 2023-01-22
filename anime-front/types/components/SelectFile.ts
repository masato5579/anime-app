import { FieldInputProps } from 'formik'
import { Dispatch, SetStateAction } from 'react'
import { Errors } from '../Errors'

export interface fileInfo {
  base64: string | null
  file: File | null
}

export interface Props {
  fileInfo: fileInfo
  setFile: Dispatch<SetStateAction<fileInfo>>
  errors: Errors
}

export interface FormField {
  field: FieldInputProps<string>
}
