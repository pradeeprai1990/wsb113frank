import { configureStore } from '@reduxjs/toolkit'
import loginSlice  from '../reducers/loginSlice'

export const store = configureStore({
    reducer: {
      adminStore: loginSlice,
    },
  })