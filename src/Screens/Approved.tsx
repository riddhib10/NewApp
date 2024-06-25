import React,{ useState, useEffect } from 'react';
import {View,Text, TouchableOpacity , StyleSheet} from 'react-native';
import Granted from './Granted';
import Revoked from './Revoked';
import Expired from './Expired';


function Approved() {
 const[selectedVal, setSelectedVal] = useState('Granted');

 const Select=(value)=>{
 setSelectedVal(value);
 };
  let contentToShow;
  switch (selectedVal) {
    case 'Granted':
      contentToShow = <Granted />;
      break;
    case 'Revoked':
      contentToShow = <Revoked />;
      break;
    case 'Expired':
      contentToShow = <Expired />;
      break;
    default:
      contentToShow = <Granted />;
  }

 return(
     <View >
     <View style={styles.container}>
         <TouchableOpacity style={[styles.radioButton, selectedVal === 'Granted' && styles.selectedButton]}
         onPress = {()=> Select('Granted') }>
             <Text> Granted </Text>
         </TouchableOpacity>

         <TouchableOpacity style={[styles.radioButton, selectedVal === 'Revoked' && styles.selectedButton ]}
         onPress = {()=> Select('Revoked') }>
            <Text> Revoked </Text>
         </TouchableOpacity>

         <TouchableOpacity style={[styles.radioButton, selectedVal === 'Expired' && styles.selectedButton ]}
         onPress = {()=> Select('Expired') }>
            <Text> Expired </Text>
         </TouchableOpacity>
     </View>
      <View>
        {contentToShow}
      </View>
     </View>
 );

 }

 const styles = StyleSheet.create({
  container: {
     padding: 15,
     borderRadius: 5,
     flexDirection: 'row',
   },
 radioButton: {
     paddingHorizontal: 27,
     paddingVertical: 5,
     borderRadius: 10,
     alignItems: 'center',

   },
 selectedButton: {
     backgroundColor: 'lightgrey',
 },

 });

 export default Approved;
