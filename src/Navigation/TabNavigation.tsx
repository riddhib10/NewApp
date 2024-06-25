import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import LinkedFacilities from './../Screens/LinkedFacilities';
import HomeTab from './../Screens/HomeTab';
import Consents from './../Screens/Consents';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeTab') {
            iconName = focused ? '🏠' : '🏠';
          } else if (route.name === 'LinkedFacilities') {
            iconName = focused ? '🔗' : '🔗';
          } else if (route.name === 'Consents') {
            iconName = focused ? '📝 ' : '📝 ';
          }
          return <Text style={{ fontSize: size, color: color,  fontWeight: 'bold' }}>{iconName}</Text>;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          display: 'flex',
        },
      }}>
      <Tab.Screen name="HomeTab" component={HomeTab} />
      <Tab.Screen name="LinkedFacilities" component={LinkedFacilities} />
      <Tab.Screen name="Consents" component={Consents} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
