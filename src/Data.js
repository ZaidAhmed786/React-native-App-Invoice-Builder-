import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Name = (props) => {
  return (
    <View style={styles.Container}>
    <View style={styles.InputContainer}>
      <Text>{props.title}</Text>
      <TextInput
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      keyboardType={props.keyboardType}
      style={styles.TextInput}
      />
    </View>
    </View>
  )
}

export default Name

const styles = StyleSheet.create({
      Container : {
      flex :1,
      backgroundColor:"white",
      paddingBottom:8
      
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