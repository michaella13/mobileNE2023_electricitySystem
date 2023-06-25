


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './components/SplashScreen';
import BuyElectricity from './components/buyElectricity/BuyElectricity';
import CheckToken from './components/checkToken/CheckToken';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>


      <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>

        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          name="buy"
          component={BuyElectricity}
        />

        <Stack.Screen
          name="tokens"
          component={CheckToken}
        />







      </Stack.Navigator>

    </NavigationContainer>

  );
}


