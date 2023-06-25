import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CustomButton({text,handleOnpress, disabled}) {
  return (
<TouchableOpacity style={styles.button} onPress={handleOnpress} disabled={disabled}>
    <Text style={styles.text}>{text}</Text>
</TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#29A5DB',
        height:40,
        marginTop:20,
        borderRadius:5,
        width:'75%',
        justifyContent:'center'
    },
    text:{
        fontWeight:'bold',
        color:'white',
        fontSize:14,
        textAlign:'center'
    }
})