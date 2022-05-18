import {configureStore} from '@reduxjs/toolkit'
import animationReducer from './animationSlice'

export const store = configureStore({
    reducer:{
        animation: animationReducer,
    }
})