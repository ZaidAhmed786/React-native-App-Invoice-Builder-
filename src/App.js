import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  HomeScreen from './HomeScreen'
import IntroScreen from './IntroScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex :1,
    
    }
})