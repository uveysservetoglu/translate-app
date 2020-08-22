import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

export default class CustomButton extends Component{

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.button, {backgroundColor:this.props.bgColor}]}>
        <Text  style={[styles.text, {color:this.props.textColor}]}>{this.props.text} </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  button:{
    paddingVertical:15,
    borderRadius:3
  },
  text:{
    fontSize:14,
    textAlign: 'center'
  }

});
