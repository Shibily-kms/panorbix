import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'



export const store = configureStore({
    reducer: {
        // User
        user: userReducer

    }
})