'use client'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  navBackground: 'before:bottom-full',
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setNavBackground: (state, action: PayloadAction<string>) => {
      state.navBackground = action.payload
    },
  },
})

export const { setNavBackground } = navSlice.actions

export default navSlice.reducer
