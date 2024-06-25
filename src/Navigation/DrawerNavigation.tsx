import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import TabNavigator from './TabNavigation';
import SignOut from '../Screens/SignOut';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
        const user = await AsyncStorage.getItem('user');
        if (user) {
          const parsedUser = JSON.parse(user);
          setUserName(parsedUser.displayName);
        }
    };
    fetchUserName();
  }, []);

  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Text>{userName}</Text>
      </View>
      <DrawerItemList {...props} />
      <SignOut />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={TabNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
