// data fetch
import axios from "axios"

// Redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const API_URL = "http://localhost:3001/api/v1"
const USER_PROFILE = `${API_URL}/user/profile`

export const userInfosUpdateThunk = createAsyncThunk(
  "user/profileUpdate",
  async data => {
    const token = JSON.parse(localStorage.getItem("token"))
    const attachedBearer = `Bearer ${token}`
    const response = await axios({
      method: "put",
      url: USER_PROFILE,
      headers: {
        "Content-type": "application/json",
        Authorization: attachedBearer
      },
      data: {
        firstName: data.firstName,
        lastName: data.lastName
      }
    })
    return response.data.body
  }
)

const initialState = {
  userInfos: {},
  error: null
}

const updateProfileSlice = createSlice({
  name: "updateProfile",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(userInfosUpdateThunk.fulfilled, (state, action) => {
      state.userInfos.firstName = action.payload.firstName
      state.userInfos.lastName = action.payload.lastName
      state.userInfos.updatedAt = action.payload.updatedAt
    })
    builder.addCase(userInfosUpdateThunk.rejected, (state, action) => {
      state.error = action.payload
    })
  }
})

export default updateProfileSlice.reducer
