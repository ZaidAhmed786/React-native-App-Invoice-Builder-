import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import Data from "../src/Data"
// import {Picker} from '@react-native-picker/picker';
// import RNPickerSelect from "react-native-picker-select";
import SelectList from 'react-native-dropdown-select-list'
import dateFormat from 'dateformat'
import { PdfCode } from './PDFCode'
// import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';

const BillCreation = () => {
  const [name, setName] = useState("")
  const [MobileNumber, setMobileNumber] = useState("")
  const [Address, setAddress] = useState("")
  const [Product, setProduct] = useState("")
  const [Quantity, setQuantity] = useState("")
  const [Selected, setSelected] = useState("")
  const [Total, setTotal] = useState("")
  const [ReceivedBalance, setReceivedBalance] = useState("")
  const [PaymentType, setPaymentType] = useState("")
  const [RemainingBalance, setRemainingBalance] = useState("")
  const [SelectPrinter, setSelectPrinter] = useState()
  const now = new Date();
  const [Invoice, setInvoice] = useState(dateFormat(now,"ddmmyyhhMss"))
  // const onChangeText = (text)=>{
  //   setName(text)
  // }
  const dataProduct = [
    {key : "1" , value : "car" },
    {key : "1" , value : "baike" }]
    const dataPaymentType = [
      {key : "1" , value : "car" },
      {key : "1" , value : "baike" }]

      const PrintToPdf = async () => {
        let html = PdfCode( name,
          Address,
          MobileNumber,
          Quantity,
          Invoice,
          Product,
          Total,
          ReceivedBalance,
          PaymentType,
          RemainingBalance);

          try {
            const {uri} = await RNPrint.printToFileAsync({html})
            console.log("File Saved to" , uri)

          } catch(error){
            console.log("error" , error)
          }
      }
  return (
    <View style={styles.Container}>
      <ScrollView>
        <View>
            <Data title="Name" placeholder="Name" value={name} onChangeText={(text)=>{setName(text)}}/>
            <Data title="Mobile Number" placeholder="Number" keyboardType="number-pad" value={MobileNumber} onChangeText={(text)=>{setMobileNumber(text)}}/>
            <Data title="Address" placeholder="Address" value={Address} onChangeText={(text)=>{setAddress(text)}}/>
            {/* <Data title="Product" placeholder="Product" value={Product} onChangeText={(text)=>{setProduct(text)}}/> */}
            <View style={styles.InputContainer}>
              <Text>Product</Text>
            <SelectList data={dataProduct} setSelected={setProduct} boxStyles={styles.TextInput} />
            </View>
            <Data title="Quantity" placeholder="Quantity" value={Quantity} onChangeText={(text)=>{setQuantity(text)}}/>
            <Data title="Total" placeholder="Total" value={Total} onChangeText={(text)=>{setTotal(text)}}/>
            <Data title="Recevied Balance" placeholder="ReceviedBalance" value={ReceivedBalance} onChangeText={(text)=>{setReceivedBalance(text)}}/>
            <Data title="Remaning Balance" placeholder="RemaningBalance" value={RemainingBalance} onChangeText={(text)=>{setRemainingBalance(text)}}/>
            <View style={styles.InputContainer}>
              <Text>Payment Type</Text>
            <SelectList data={dataPaymentType} setSelected={setPaymentType} boxStyles={styles.TextInput} />
            </View>
            <View style={styles.button}>
            <Button  title='Create Invoice' onPress={()=> PrintToPdf()}/>
            </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default BillCreation

const styles = StyleSheet.create({
  
InputContainer:{
marginTop:15,
marginLeft:15,
marginRight:15,
paddingBottom:8
},
TextInput:{
    marginTop:4,
    height: 45,
    borderColor:"#000",
    borderWidth:1,
    borderRadius:4,
    padding:4,
    marginBottom:6
     },
     button : {
     
      marginBottom:20,
      padding:10
     }
})