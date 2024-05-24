import { combineReducers } from '@reduxjs/toolkit'
import paymenReucer from './slices/payment.slice' // Misol uchun

const rootReducer = combineReducers({
    payment: paymenReucer,
})

export type RootState = ReturnType<typeof rootReducer>;


export default rootReducer