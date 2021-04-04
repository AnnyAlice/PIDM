import React, {Component} from 'react'
import {View, Text} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import FirebaseApp from './components/Atividade 06/FirebaseApp'
import Rotas from './components/Atividade 07/src/Rotas'

export default class App extends Component{
  render(){
    return(
      <SafeAreaProvider>
        <Rotas></Rotas>
      </SafeAreaProvider>
    )
  }
}