import { configureStore } from "@reduxjs/toolkit"
import authSliceReducer from "../features/auth/authSlice"
import profileSlice from "../features/profile/profileSlice"

const store = configureStore({
  reducer: {
    user: authSliceReducer,
    profile: profileSlice
  }
})

export default store
