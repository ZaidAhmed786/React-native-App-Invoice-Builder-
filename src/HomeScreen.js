import { StyleSheet, Text, View , Image, ImageBackground, TouchableOpacity} from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.Image} source={(require("../assets/aa.png"))}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>NEXT</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex :1,
        alignItems:"center",
        backgroundColor:"#EDEADE",
        justifyContent:"center",
        
    },
    Image:{
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        height:"100%",
        width:"100%"
    },
    button : {
        
        marginTop:670,
        fontSize:18,
        backgroundColor:"#494F55",
        height:50,
        width:"90%",
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:20,
        borderRadius:10,
        opacity:0.9
        
        
    
    },
    text :{
        fontSize: 20,
        color:"#fff"
    }
})