import React,{useEffect} from 'react';
import {View, Text } from 'react-native';
import {signOut} from '../Services/GoogleAuth';


function LinkedFacilities() {
useEffect(()=>{
signOut();
});


  return (
    <View>
      <Text>
        LINKED FACILITIES
      </Text>
    </View>
  );
}

export default LinkedFacilities;
