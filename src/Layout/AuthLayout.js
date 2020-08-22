import React from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from "react-native";

export default ({children, navigation}) =>{

  return(
    <View style={styles.container}>
      <View style={styles.headerBackground}></View>
      {children}
      <View style={styles.skipView}>
        <TouchableOpacity style={styles.skipTouch} onPress={()=>navigation.navigate({routeName:"Home"})}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#f5f5f5',
    paddingTop: 80
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 400,
    width: '100%',
    backgroundColor: '#002841',
    borderBottomRightRadius: 150
  },
  skipView:{
    justifyContent:'flex-end',
    alignItems: 'flex-end',
    bottom:30,
    right:15,
    flex:1,

  },
  skipText:{
    fontSize:16,
    borderWidth:1,
    padding:5,
    paddingHorizontal:15,
    color:'#FFF',
    backgroundColor: '#002841',
  },
  skipTouch:{
  }
});
