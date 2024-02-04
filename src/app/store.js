import { configureStore } from "@reduxjs/toolkit"
import authSliceReducer from "../features/auth/authSlice"

const store = configureStore({
  reducer: {
    user: authSliceReducer
  }
})

export default store
