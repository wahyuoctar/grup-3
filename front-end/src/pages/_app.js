import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import store from '../redux/store'

import AuthProvider from '../component/AuthProvider'
import Navbar from '../component/Navbar'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  

  return (
    <Provider store={store}>
      <ChakraProvider>
          <AuthProvider>
            <Navbar />
            <Component {...pageProps} />
          </AuthProvider>
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
