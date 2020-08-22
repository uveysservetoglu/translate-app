import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, KeyboardAvoidingView, Image, TouchableOpacity} from 'react-native';
import CustomButton from "../Form/CustomButton";
import InputText from "../Form/InputText";

export default class LoginForm extends Component{
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex:4}}>
        <KeyboardAvoidingView behavior={'position'}>
          <View style={styles.logo}>
            <Image
              style={styles.tinyLogo}
              source={require('../../assets/icon_150x158.png')}/>
          </View>
          <View>
            <Text style={styles.description}>Dolphin Translate</Text>
          </View>
          <ScrollView>
            <View style={styles.loginArea}>
              <View>
                <InputText
                  returnKeyType={"next"}
                  autoCapitalize={false}
                  placeholder="Username"
                  onSubmitEditing={()=>this.passwordInput.focus()}
                />
                <InputText
                  secureTextEntry={true}
                  placeholder="Password"
                  inputRef={input => this.passwordInput = input }/>
                <CustomButton text={"Okey! Let's Go"} bgColor={"#002841"} textColor={"#fff"}/>
              </View>
            </View>
          </ScrollView>
          <View style={styles.signUpArea}>
            <Text style={styles.descriptionSignUpArea}>Don't have an account</Text>
            <TouchableOpacity onPress={()=>navigate({routeName:"Register"})} >
              <Text style={{fontSize: 18,  marginTop:15, padding: 7}}>Sing In</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logo:{
    color:'#f5f5f5',
    marginTop:60,
    fontSize:40,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:15
  },
  tinyLogo: {
    width: 75,
    height: 75,
  },
  description:{
    color:'#f5f5f5',
    textAlign: 'center'
  },
  loginArea:{
    backgroundColor:'#fff',
    marginHorizontal:50,
    marginVertical:69,
    padding:20,
    borderRadius:5,
    shadowColor:'black',
    shadowOpacity:0.2,
    shadowRadius:1,
    shadowOffset:{
      width: 0,
      height: 2
    },
    elevation:4
  },
  signUpArea: {
    alignItems:'center'
  },
  descriptionSignUpArea:{
    color:'#999'
  }
});
