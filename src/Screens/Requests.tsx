import React,{ useState, useEffect } from 'react';
import {View,Text, TouchableOpacity , StyleSheet} from 'react-native';
import All from './All';
import Pending from './Pending';
import Denied from './Denied';
import Expired from './Expired';


function Requests() {
 const[selectedVal, setSelectedVal] = useState('All');

 const Select=(value)=>{
 setSelectedVal(value);
 };
  let contentToShow;
  switch (selectedVal) {
    case 'All':
      contentToShow = <All />;
      break;
    case 'Pending':
      contentToShow = <Pending />;
      break;
    case 'Denied':
      contentToShow = <Denied />;
      break;
    case 'Expired':
      contentToShow = <Expired />;
      break;
    default:
      contentToShow = <All />;
  }

 return(
     <View style= {styles.layout}>
     <View style={styles.container}>
         <TouchableOpacity style={[styles.radioButton, selectedVal === 'All' && styles.selectedButton]}
         onPress = {()=> Select('All') }>
             <Text> All </Text>
         </TouchableOpacity>

         <TouchableOpacity style={[styles.radioButton, selectedVal === 'Pending' && styles.selectedButton ]}
         onPress = {()=> Select('Pending') }>
            <Text> Pending </Text>
         </TouchableOpacity>

         <TouchableOpacity style={[styles.radioButton, selectedVal === 'Denied' && styles.selectedButton ]}
         onPress = {()=> Select('Denied') }>
            <Text> Denied </Text>
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
     paddingHorizontal: 25,
     paddingVertical: 10,
     borderRadius: 10,
     alignItems: 'center',

   },
 selectedButton: {
     backgroundColor: 'lightgrey',
 },

 });

 export default Requests;
