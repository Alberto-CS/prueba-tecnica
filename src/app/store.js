import { configureStore } from '@reduxjs/toolkit'
import { charactersApi } from '../features/characterListAPI'

export const store = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer
  }
})
