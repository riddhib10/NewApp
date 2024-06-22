import React,{useEffect} from 'react';
import {View, Text } from 'react-native';
import {signOut} from '../Services/GoogleAuth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from '../Screens/HomeTab';

const Tab = createBottomTabNavigator();

function TabNavigator() {
useEffect(()=>{
});

  return (
    <Tab.Navigator initialRouteName="HomeTab">
      <Tab.Screen name="HomeTab" component={HomeTab} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
