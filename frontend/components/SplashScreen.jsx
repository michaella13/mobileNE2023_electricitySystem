import { StatusBar } from 'expo-status-bar';
import {  View, StyleSheet} from 'react-native'
import React, {useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import Logo from '../common/Logo';

export default function SplashScreen() {
    const navigation = useNavigation();

    useEffect(()=>{
        const timer=setTimeout(()=>{
            navigation.replace('tokens')
        },3000)
        return()=>clearTimeout(timer);
    },[navigation])
  return (
    <View style={styles.container}>
        <StatusBar/>
        <Logo/>
       
    </View>
   
  )
}
const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#F7F7F7',
        height:'100%'

    }
  
})

