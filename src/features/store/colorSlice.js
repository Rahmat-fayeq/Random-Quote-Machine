import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  color: "rgb(115, 168, 87)",
}

export const counterSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload
    },
  },
})

export const {changeColor } = counterSlice.actions

export default counterSlice.reducer