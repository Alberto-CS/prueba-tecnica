import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.breakingbadapi.com/api/' }),
  endpoints: builder => ({
    getAllCharacters: builder.query({
      query: () => `characters`
    }),
    getQuoteByAuthor: builder.query({
      query: name => `quote?author=${name.replace(' ', '+')}`
    })
  }),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(charactersApi.middleware)
})

export const { useGetAllCharactersQuery } = charactersApi
export const { useGetQuoteByAuthorQuery } = charactersApi