import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import Data from "../src/Data"
import {Picker} from '@react-native-picker/picker';
import RNPickerSelect from "react-native-picker-select";

const BillCreation = () => {
  const [name, setName] = useState("")
  const [MobileNumber, setMobileNumber] = useState("")
  const [Address, setAddress] = useState("")
  const [Product, setProduct] = useState("A")
  const [Quantity, setQuantity] = useState("")
  // const onChangeText = (text)=>{
  //   setName(text)
  // }
  return (
    <View style={styles.Container}>
      <ScrollView>
        <View>
            <Data title="Name" placeholder="Name" value={name} onChangeText={(text)=>{setName(text)}}/>
            <Data title="Mobile Number" placeholder="Number" keyboardType="number-pad" value={MobileNumber} onChangeText={(text)=>{setMobileNumber(text)}}/>
            <Data title="Address" placeholder="Address" value={Address} onChangeText={(text)=>{setAddress(text)}}/>
            <Data title="Product" placeholder="Product" value={Product} onChangeText={(text)=>{setProduct(text)}}/>
            <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]} />

            <Data title="Quantity" placeholder="Quantity" value={Quantity} onChangeText={(text)=>{setQuantity(text)}}/>
        </View>
      </ScrollView>
    </View>
  )
}

export default BillCreation

const styles = StyleSheet.create({
    
})