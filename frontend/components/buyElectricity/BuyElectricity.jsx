import React, { useState,useEffect } from 'react';
import { Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './buyElectricity.styles';
import Logo from '../../common/Logo';
import CustomInput from '../../common/CustomInput';
import CustomButton from '../../common/CustomButton';
    import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';

export default function BuyElectricity() {
  const navigation = useNavigation();

  const [amount, setAmount] = useState('');
  const [meterNumber, setMeterNumber] = useState('');
  const [existingMeters, setExistingMeters] = useState([]);
  const [token, setToken]=useState('')


  const validateAmount = () => {
    const parsedAmount = parseInt(amount);
    return amount.length <= 6 && parsedAmount >= 100 && parsedAmount <= 182500;
  };

//   const validateMeterNumber = () => {
//     return meterNumber.length === 6;
//   };

  const calculateValidDays = () => {
    const parsedAmount = parseInt(amount);
    return Math.floor(parsedAmount / 100);
  };
  const data={
    amount:amount,
    meterNumber:meterNumber
  }
  const buy = () => {
    axios.post('http://192.168.8.106:8000/buy',data)
    .then(response=>{
        // console.log('token'+ response.data.token)
        setToken(response.data.token)
    })
    .catch(err=>{
        console.log(err);
    })

  };

  useEffect(() => {
    // Fetch existing meters
    axios
      .get('http://192.168.8.106:8000/meter')
      .then(response => {
        // Update the existing meters state
        setExistingMeters(response.data);
      })
      .catch(error => {
        console.error('Error occurred while fetching meters:', error);
      });
  }, []);
  

  const handleMeterChange = value => {
    setMeterNumber(value);
  };

  const checkTokens=()=>{
    navigation.navigate('tokens')
  }

  

  

  return (
    <View style={styles.container}>
       
      <Logo />
      <Text style={styles.welcome}>Welcome to EUCL!</Text>
        <View>
        <Text>Your token</Text>
            <Text>{token}</Text>
        </View>
      <CustomInput
        value={amount}
        placeholder='Amount'
        onChange={setAmount}
        icon={<MaterialIcons name='email' size={24} color='grey' />}
        keyboard='number-pad'
      />
      {!validateAmount() && (
        <Text style={styles.error}>
          Amount should be not less than 100, you can only buy for 5 years
        </Text>
      )}
     
      {/* <Picker
        selectedValue={meterNumber}
        onValueChange={handleMeterChange}
        style={{ borderBottomColor: 'grey', borderBottomWidth: 1, width: '75%' }}
      >
        {existingMeters.map(meter => (
          <Picker.Item key={meter._id} label={meter.meterNumber} value={meter.meterNumber} />
        ))}
      </Picker> */}

<Picker
  selectedValue={meterNumber}
  onValueChange={handleMeterChange}
  style={{ borderBottomColor: 'grey', borderBottomWidth: 1, width: '75%' }}
>
  <Picker.Item label="300200" value="300200" />
  <Picker.Item label="300129" value="300129" />
  <Picker.Item label="120923" value="120923" />
</Picker>

    
      {validateAmount() && (
        <Text style={styles.validDays}>
          Valid Days: {calculateValidDays()}
        </Text>
      )}
      <CustomButton
        text='Buy'
        handleOnpress={buy}
        disabled={!validateAmount()}
      />
       <CustomButton
        text='Check Tokens'
        handleOnpress={checkTokens}
      />
 
 {/* <Text>Hello</Text> */}

    </View>
  );
}
