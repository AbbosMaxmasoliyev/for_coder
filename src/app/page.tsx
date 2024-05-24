"use client"
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import Home from './pages/home'
import store from "@/store/index"
const MyApp = ({ Component, ...rest }: AppProps) => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default MyApp