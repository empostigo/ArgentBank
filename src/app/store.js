import { configureStore } from "@reduxjs/toolkit"
import authSliceReducer from "../features/auth/authSlice"
import profileSliceReducer from "../features/profile/profileSlice"
import updateUserProfileSliceReducer from "../features/updateUserProfile/updateUserProfileSlice"

const store = configureStore({
  reducer: {
    user: authSliceReducer,
    profile: profileSliceReducer,
    updateProfile: updateUserProfileSliceReducer
  }
})

export default store
