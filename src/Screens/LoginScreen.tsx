import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {signInWithGoogle} from '../Services/GoogleAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginScreen({navigation}:Props){

useEffect(() => {
    const checkLoginStatus = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        navigation.navigate('DrawerNavigator');

      }else {
      }
    };
    checkLoginStatus();
  }, []);


return (
    <View style = {styles.container}>
        <TouchableOpacity onPress={async () => {
           const signedInUser = await signInWithGoogle();
           navigation.navigate('DrawerNavigator');
           }}
           style={styles.button}>
            <Text style={styles.text}> Sign In With Google
           </Text>
        </TouchableOpacity>
    </View>
);
}
const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:'center',
alignItems:'center'
},
button:{
    backgroundColor:'#0096FF',
    color:'#fff',
    height:25,
    width:300,
    alignItems:'center',
    fontSize: 24,
    fontWeight: 'bold',
},
text:{
    color:'white',
    fontSize: 20,
    fontWeight: 'bold',
}

});

export default LoginScreen;
