import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Name = (props) => {
  return (
    <View style={styles.InputContainer}>
      <Text>Name</Text>
      <TextInput
      placeholder={props.placeholder}
      style={styles.TextInput}
      />
    </View>
  )
}

export default Name

const styles = StyleSheet.create({
      Container : {
      flex :1,
      backgroundColor:"white"
    },
    InputContainer:{
   marginTop:15,
   marginLeft:15,
   marginRight:15,
    },
    TextInput:{
        marginTop:4,
        height:40,
        borderColor:"#000",
        borderWidth:1,
        borderRadius:4,
        padding:4,
        marginBottom:6
         }
})