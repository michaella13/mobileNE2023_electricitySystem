import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Logo({style}) {
  return (
    <View>
        <Image
      source={require('../assets/logo.png')}
      style={style}
      />
      
      
       <Text style={styles.text}>EUCL</Text>
    </View>
  )
}

const styles=StyleSheet.create({
 
    text:{
        fontSize:30,
        fontWeight:'bold',
        color:'#29A5DB',
        textAlign:'center'
    }
})