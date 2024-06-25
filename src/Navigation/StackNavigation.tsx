import React, {useState,useEffect, } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import LoginScreen from '../Screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createStackNavigator();

function StackNavigation() {

    const[isLogIn, setIsLogin] = useState(false);

useEffect(() => {
    const checkLoginStatus = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setIsLogin(true);
        console.log(user);
      }
    };
    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= {isLogIn ? 'DrawerNavigator' : 'LoginScreen'}>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigation} options ={{headerShown : false}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown : false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
