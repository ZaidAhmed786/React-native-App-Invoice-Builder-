import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Data from "../src/Data"

const BillCreation = () => {
  return (
    <View style={styles.Container}>
      <ScrollView>
        <View>
            <Data placeholder="Name"/>
            <Data placeholder="Number"/>
            <Data />
        </View>
      </ScrollView>
    </View>
  )
}

export default BillCreation

const styles = StyleSheet.create({
    
})