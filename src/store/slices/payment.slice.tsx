import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PaymentSliceState {
    activeSelection: string,
}

const initialState: PaymentSliceState = {
    activeSelection: "",
}

const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        setActiveSelection: (state, action) => {
            state.activeSelection = action.payload
        }
    },
})
export const { setActiveSelection } = paymentSlice.actions
export default paymentSlice.reducer