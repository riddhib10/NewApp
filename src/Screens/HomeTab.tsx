import React,{useEffect} from 'react';
import {View, Text } from 'react-native';
import {signOut} from '../Services/GoogleAuth';


function HomeTab() {
useEffect(()=>{
signOut();
});


  return (
    <View>
      <Text>
        HOME
      </Text>
    </View>
  );
}

export default HomeTab;
