export type User = Pick<
  UserResponse,
  | 'id'
  | 'name'
  | 'email'
  | 'image'
  | 'age'
  | 'sex'
  | 'email_verified_at'
  | 'created_at'
  | 'updated_at'
>

export interface UserResponse {
  id: number
  name: string
  email: string
  image: string
  age: number
  sex: number
  email_verified_at: Date
  created_at: Date
  updated_at: Date
}
