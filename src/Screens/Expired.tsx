import React, { useEffect, useState } from 'react';
import { Text, View , FlatList, StyleSheet} from 'react-native';


function Expired() {

    const dummyData = require('../Data/dummyData.json');

    const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Text style={styles.hospitalName}>{item.hospitalName}</Text>
      <Text>Request Type: {item.requestType}</Text>
      <Text>Date of Request: {item.dateOfRequest}</Text>
      <Text>Status: {item.status}</Text>
    </View>
    );

  return (
    <View>
      <FlatList
        data={dummyData.dataExpired}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
container:{
    backgroundColor: 'lightgrey',
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 10,
    }
});

export default Expired;
