'use client'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  navBackground: 'before:bottom-full',
  mobileMenu: '',
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setNavBackground: (state, action: PayloadAction<string>) => {
      state.navBackground = action.payload
    },
    setMobileMenu: (state, action: PayloadAction<string>) => {
      state.mobileMenu = action.payload
    },
  },
})

export const { setNavBackground, setMobileMenu } = navSlice.actions

export default navSlice.reducer
