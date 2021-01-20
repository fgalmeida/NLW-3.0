import { StatusBar } from 'expo-status-bar';
import React from 'react'

import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold, useFonts } from '@expo-google-fonts/nunito'

import Routes from './src/routes'

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold, 
    nunito700: Nunito_700Bold, 
    Nunito_800ExtraBold
  })

  if(!fontsLoaded) {
    return null
  }

  return (
    <Routes />
  )
}

