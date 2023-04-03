import { Users } from './ResponseInterface'

export interface UserState {
  users: any
  allUsersData: Users[]
  userDetails: Users
  loading: boolean
  fulfilled: boolean
}
