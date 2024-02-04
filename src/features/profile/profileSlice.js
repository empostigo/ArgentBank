// data fetch
import axios from "axios"

// Redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const API_URL = "http://localhost:3001/api/v1"
const USER_PROFILE = `${API_URL}/user/profile`

export const userInfosThunk = createAsyncThunk("user/profile", async () => {
  const token = JSON.parse(localStorage.getItem("token"))
  const attachedBearer = `Bearer ${token}`
  const response = await axios({
    method: "post",
    url: USER_PROFILE,
    headers: {
      "Content-type": "application/json",
      Authorization: attachedBearer
    }
  })
  return response.data.body
})

const initialState = {
  userInfos: {},
  error: null
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(userInfosThunk.pending, state => {
      return state
    })
    builder.addCase(userInfosThunk.fulfilled, (state, action) => {
      state.userInfos.id = action.payload.id
      state.userInfos.email = action.payload.email
      state.userInfos.firstName = action.payload.firstName
      state.userInfos.lastName = action.payload.lastName
      state.userInfos.createdAt = action.payload.createdAt
      state.userInfos.updatedAt = action.payload.updatedAt
    })
    builder.addCase(userInfosThunk.rejected, (state, action) => {
      state.error = action.payload
    })
  }
})

export default profileSlice.reducer
