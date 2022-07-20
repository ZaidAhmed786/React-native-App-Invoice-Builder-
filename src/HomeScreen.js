import { StyleSheet, Text, View , Image, ImageBackground, TouchableOpacity} from 'react-native'
import React from 'react'
import BillCreation from './BillCreation'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <BillCreation />
     </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  
})