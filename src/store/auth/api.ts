import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_LOCAL_URL = 'http://127.0.0.1:4000/api'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_LOCAL_URL,
    prepareHeaders: (headers) => {
      headers.set('content-type', 'application/json')
      headers.set('Accept', 'application/json')
      return headers
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        url: '/login',
        method: 'POST',
        body: {
          email: payload.email,
          password: payload.password,
        },
      }),
    }),
  }),
})

export const { useLoginMutation } = authApi
