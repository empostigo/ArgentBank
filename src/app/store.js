import { configureStore } from "@reduxjs/toolkit"
import authSliceReducer from "../features/auth/authSlice"
import profileSliceReducer from "../features/profile/profileSlice"

const store = configureStore({
  reducer: {
    user: authSliceReducer,
    profile: profileSliceReducer
  }
})

export default store
