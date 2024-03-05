// data fetch
import axios from "axios"

// Redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const API_URL = "http://localhost:3001/api/v1"
const USER_LOGIN = `${API_URL}/user/login`

// Try a login with provided email and password
export const logUserThunk = createAsyncThunk("user/login", async data => {
  const email = data.email
  const password = data.password
  const response = await axios.post(USER_LOGIN, { email, password })
  return response.data.body
})

const initialState = {
  success: false,
  token: null,
  userAuthenticated: false,
  error: ""
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOutUser: state => {
      localStorage.removeItem("token")
      sessionStorage.removeItem("token")
      state.success = false
      state.token = null
      state.userAuthenticated = false
    },
    authenticatedUser: state => {
      state.success = true
      state.token = localStorage.getItem("token")
      state.userAuthenticated = true
    }
  },
  extraReducers: builder => {
    builder.addCase(logUserThunk.pending, state => {
      return state
    })
    builder.addCase(logUserThunk.fulfilled, (state, action) => {
      state.success = true
      state.token = action.payload.token
      state.userAuthenticated = true
    })
    builder.addCase(logUserThunk.rejected, (state, action) => {
      state.success = false
      state.error = action.error.message
    })
  }
})

// Use in profileSlice to retrieve the JWT from the store
export const getJWTToken = state => state.user.token

export const { logOutUser } = authSlice.actions
export const { authenticatedUser } = authSlice.actions

export default authSlice.reducer
