import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './slice/loginSlice.js'
export default configureStore({
  reducer: {
    login: loginReducer,
  },
})