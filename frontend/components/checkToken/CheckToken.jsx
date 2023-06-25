import {  Text, TouchableOpacity, View } from 'react-native'
import styles from './checkToken.styles'
import CustomInput from '../../common/CustomInput'
import CustomButton from '../../common/CustomButton'
import React, {useState} from 'react'
import { FontAwesome5 } from '@expo/vector-icons'; 
import axios from 'axios'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function CheckToken() {

  const navigation = useNavigation();

  const [meter, setMeter]=useState('')
  const [tokens, setTokens]=useState([])

  const handleSearch=()=>{
    
    const searchQuery={
      meterNumber:meter
    }
    axios.post("http://192.168.8.106:8000/search", searchQuery)
    .then(response=>{
      setTokens(response.data)
      console.log('token '+response.data[0].token)
    })
    .catch(err =>{
      console.error('Error getting tokens '+err)
    })
    
  
}

const goToBuy=()=>{
  navigation.navigate('buy')
}
// console.log("Tokensss "+tokens)

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToBuy}>
      <Ionicons name="arrow-back" size={24} color="grey" />
      </TouchableOpacity>
      
    <CustomInput
    icon={<FontAwesome5 name="search" size={24} color="grey" />}
    placeholder='Search'
    value={meter}
    onChange={text=>{
      setMeter(text)
    }}
    keyboard='default'
    />
    <CustomButton handleOnpress={handleSearch} text='Get tokens'/>

    <View style={styles.tokenContainer}>
    {tokens.map(token=>(
      <Text key={token._id} style={styles.tokens}>{token.token}</Text>
    ))}
    </View>

    
    
    </View>
  )
}

