import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export default class InputText extends Component{
  state: {
    text: null
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            {...this.props}
            placeholderTextColor={"#ddd"}
            style={styles.input}
            ref={this.props.inputRef}
            onChangeText={text => this.setState({text})}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  signInText: {
    color:'#333',
    fontSize:14,
    marginVertical:10
  },
  input: {
    height:40,
    paddingHorizontal:5,
    borderWidth:2,
    borderRadius:4,
    marginBottom:8,
    borderColor:'#f1f1f1',
    fontSize: 14,
    fontWeight: '600'
  }
});
