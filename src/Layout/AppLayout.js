import React from 'react';
import {StyleSheet, View} from "react-native";
export default ({children}) =>{
  return(
    <View style={styles.container}>
      {children}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#f5f5f5',
  }
});
