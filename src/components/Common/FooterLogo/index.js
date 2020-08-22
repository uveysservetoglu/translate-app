import React from 'react';
import {View, StyleSheet, Image} from "react-native";
import {Icon} from "native-base";

export default () => (
  <View style={styles.container}>
    <View style={styles.circle}>
      <Icon name="md-home" style={{ fontSize:40 }} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center'
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4
  },
  profileImage:{
    height:40,
    width:40,
    borderRadius:50,
  },
});
