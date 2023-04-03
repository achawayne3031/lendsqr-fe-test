import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getRequest } from './api'
import { UserState } from '../../interface/AppStateInterface'
import { displayNotify } from '../../utilities/Notify'

const initialState = {
  allUsersData: [],
  userDetails: null,
  loading: false,
  fulfilled: false,
  error: null,
}

export const allUsers = createAsyncThunk('users', async () => {
  const response = await getRequest('/users')
  return response.data
})

export const getUserData = createAsyncThunk(
  'userData',
  async (id: any, { dispatch, getState }) => {
    const response = await getRequest(`users/${id}`)
    return response.data
  },
)

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // toggleTodo(state, action) {},
    setError(state, action) {
      state.error = action.payload
    },
    removeError(state, action) {
      state.error = null
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(allUsers.pending, (state, action) => {
        state.loading = true
        state.fulfilled = false
      })
      .addCase(allUsers.fulfilled, (state, action) => {
        state.loading = false
        state.fulfilled = true
        state.allUsersData = action.payload
      })
      .addCase(allUsers.rejected, (state, action) => {
        state.loading = false
        state.fulfilled = false
        state.allUsersData = []
        displayNotify(action.error.message, 'error')
      })

      /////// Get User Data /////
      .addCase(getUserData.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.loading = false
        state.userDetails = action.payload
        state.fulfilled = true
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.fulfilled = false
        state.loading = false
        state.userDetails = null
        displayNotify(action.error.message, 'error')
      })
  },
})

export const selectUser = (state: UserState) => state.users

export const { setError, removeError } = userSlice.actions

export default userSlice.reducer
