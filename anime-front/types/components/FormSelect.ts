export interface Props {
  name: string
  errorsArray: string[]
  label: string
  placeHolder: string
  options: Option[]
}

export interface Option {
  value: string | number
  viewValue: string | number
}
