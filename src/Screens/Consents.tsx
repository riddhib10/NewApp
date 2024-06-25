import React, {useState} from 'react';
import {View,Text, TouchableOpacity , StyleSheet} from 'react-native';
import Approved from './Approved';
import Requests from './Requests';

function Consents(){
const[selectedVal, setSelectedVal] = useState('Requests');

const Select=(value)=>{
setSelectedVal(value);
};

return(
    <View >
    <View style={styles.container}>
        <TouchableOpacity style={[styles.radioButton, selectedVal === 'Requests' && styles.selectedButton]}
        onPress = {()=> Select('Requests') }>
            <Text> Requests </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.radioButton, selectedVal === 'Approved' && styles.selectedButton ]}
        onPress = {()=> Select('Approved') }>
           <Text> Approved </Text>
        </TouchableOpacity>
    </View>
    <View>
        {(selectedVal == "Requests") ?
        <Requests/> : <Approved/>
        }
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
    paddingHorizontal: 52,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',

  },
selectedButton: {
    backgroundColor: 'lightblue',
},

});

export default Consents;
