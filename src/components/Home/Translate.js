import React, {Component} from 'react';
import {View, StyleSheet, TextInput} from 'react-native'
import {Picker, Text} from "native-base";
export default class TranslateForm extends Component{
  state = {
    selectedLocations: [],
    value: 'EN',
    locations: [
      { item: 'Turkish', id: 'TR' },
      { item: 'English', id: 'EN' },
    ]
  };

  pickerRender(title, locations, value) {
    return <Picker
      mode="dropdown"
      iosHeader="Translate From"
      style={styles.picker}
      selectedValue={value}
      textStyle={styles.textStyle}
      itemStyle={styles.itemStyle}
    >
      {locations && locations.length > 0 && locations.map(x => (
        <Picker.Item key={x.id} label={x.item} value={x.id} style={styles.pickerItem}/>
      ))}
    </Picker>
  }

  render(){
    const { locations, selectedLocations, value } = this.state
    return (
      <View style={styles.translateContainer}>
        <View style={styles.language}>
          <View style={styles.languageSource}>
            {this.pickerRender("Translate from", locations, value)}
          </View>
          <View style={styles.changeLanguage}>
            <FontAwesomeIcon icon={faExchangeAlt} size={ 16 }  style={{color:"#fff"}}/>
          </View>
          <View style={styles.languageDestination}>
            {this.pickerRender("Translate to", locations, value)}
          </View>
        </View>
        <View style={styles.inputKeyword}>
          <TextInput
            placeholderTextColor={"#ddd"}
            style={styles.input}
            placeholder="Enter Text" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  translateContainer:{
    marginTop:100,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  language:{
    backgroundColor:"#303d4e",
    flex:1,
    borderBottomWidth:0.2,
    borderColor:'#999',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  },
  inputView:{
    flex:5
  },
  languageSource:{
    flex:5,
    height:40
  },
  changeLanguage:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
  },
  languageDestination:{
    flex:5,
  },

  input: {
    height:200,
    paddingHorizontal:5,
    marginBottom:8,
    color:"#fff",
    fontSize: 14,
    backgroundColor: '#002841',
    borderRadius:0,
    fontWeight: '600',
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start'
  },
  picker: {
    width:"100%",
  },
  textStyle: {
    marginTop:55,
    marginLeft:45,
    fontSize:20,
    height: 70,
    color:"#fff",
  },
  itemStyle: {
    fontSize: 15,
    color: 'black'
  },

  inputKeyword:{
    flex:13,
  },
  translateText:{
    color:'#000',
    flex:8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },

  translateInputRow:{
    backgroundColor: 'powderblue',
    height:50,
    width:50
  },
  translateOutputRow:{
    backgroundColor: 'steelblue',
    height:50,
    width:50
  }
});
