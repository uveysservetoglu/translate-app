import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, KeyboardAvoidingView, Button, Image, TouchableOpacity} from 'react-native';
import { Picker } from 'native-base';
import CustomButton from "../Form/CustomButton";
import InputText from "../Form/InputText";


export default class RegisterForm extends Component{
  state = {
    selectedLocations: [],
    value: 0,
    locations: [
      { item: 'Select Country', id: 0 },
      { item: 'Afghanistan', id: 'AF' },
      { item: 'land Islands', id: 'AX' },
      { item: 'Albania', id: 'AL' },
      { item: 'Algeria', id: 'DZ' },
      { item: 'American Samoa', id: 'AS' },
      { item: 'AndorrA', id: 'AD' },
      { item: 'Angola', id: 'AO' },
      { item: 'Anguilla', id: 'AI' },
      { item: 'Antarctica', id: 'AQ' },
      { item: 'Antigua and Barbuda', id: 'AG' },
      { item: 'Argentina', id: 'AR' },
      { item: 'Armenia', id: 'AM' },
      { item: 'Aruba', id: 'AW' },
      { item: 'Australia', id: 'AU' },
      { item: 'Austria', id: 'AT' },
      { item: 'Azerbaijan', id: 'AZ' },
      { item: 'Bahamas', id: 'BS' },
      { item: 'Bahrain', id: 'BH' },
      { item: 'Bangladesh', id: 'BD' },
      { item: 'Barbados', id: 'BB' },
      { item: 'Turkey', id: 'TR' },
    ]
  };

  onChange = (value) => {

    this.setState({ value });
  };

  render() {
    const {navigate} = this.props.navigation;
    const { locations, selectedLocations, value } = this.state
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
                  onSubmitEditing={()=>this.emailInput.focus()}
                />
                <InputText
                  returnKeyType={"next"}
                  autoCapitalize={false}
                  placeholder="Email"
                  inputRef={input => this.emailInput = input }
                  onSubmitEditing={()=>this.passwordInput.focus()}
                />
                <InputText
                  secureTextEntry={true}
                  placeholder="Password"
                  inputRef={input => this.passwordInput = input }/>
                <Picker
                  mode="dropdown"
                  iosHeader="İptal sebebi seçiniz"
                  style={styles.picker}
                  selectedValue={value}
                  onValueChange={this.onChange}

                >
                  {locations && locations.length > 0 && locations.map(x => (
                    <Picker.Item key={x.id} label={x.item} value={x.id} />
                  ))}

                </Picker>
                <CustomButton text={"Okey! Register me..."} bgColor={"#002841"} textColor={"#fff"}/>
              </View>
            </View>
          </ScrollView>
          <View style={styles.signUpArea}>
            <Text style={styles.descriptionSignUpArea}>Do you have an account</Text>
            <TouchableOpacity onPress={()=>navigate({routeName:"Login"})} >
              <Text style={{fontSize: 18, marginTop:15}}>Sing In</Text>
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
    marginTop:30,
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
    marginVertical:50,
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
  },
  picker: {
    height:40,
    paddingHorizontal:5,
    borderWidth:2,
    borderRadius:4,
    marginBottom:8,
    borderColor:'#f1f1f1',
    color:"#999",
    fontSize: 14,
    fontWeight: '600'
  }
});
