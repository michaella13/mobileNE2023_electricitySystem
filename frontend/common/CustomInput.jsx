import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

export default function CustomInput({placeholder,icon, onChange,keyboard,value,secure}) {
  return (
    <View style={styles.container}>
        {icon && <View style={styles.icon}>{icon}</View>}
      <TextInput
      value={value}
      placeholder={placeholder}
      onChangeText={onChange}
      keyboardType={keyboard}
      secureTextEntry={secure}
      style={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    borderBottomColor:'#9B9B9B',
    borderBottomWidth:1,
    height:40,
    marginTop:20
    
  },

  icon:{
    marginTop:5,
    marginRight:15

  },
  input:{
    width:'70%'
  }
})