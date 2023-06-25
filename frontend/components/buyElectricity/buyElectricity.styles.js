import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#F7F7F7',
        height:'100%',
        // width:'100%'
    

    },
    text:{
        fontSize:30,
        fontWeight:'bold',
        color:'#0084CA',
        textAlign:'center'
    },
    welcome:{
        fontWeight:'bold',
        textAlign:'left',
        width:'75%'
    },
    or:{
        marginTop:20,
        color:'grey'
    },
    dont:{
        flexDirection:'row',
        marginTop:20
    },
    register:{
        color:'#0084CA',
        fontWeight:'bold',
        
    },
    logo:{
        width:100,
        height:100
    },
    error:{
        color:'red',
        width:'75%'
    },
    validDays:{
        color:'green',
        textAlign:'center',
        
    } 
    
})
export default styles;