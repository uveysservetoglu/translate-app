import React, {Component} from 'react';
import {StyleSheet, TextInput, View} from "react-native";
import {Picker, Text} from "native-base";
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default class Home extends Component{
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
  render() {
    const { locations, value } = this.state
    return (
      <View style={styles.translateContainer}>
        <View style={styles.translateInputRow}>
          <View style={styles.languageChoices}>
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
          <View style={styles.translateInput}>
            <TextInput
              placeholderTextColor={"#ddd"}
              style={styles.input}
              placeholder="Enter Text" />
          </View>
        </View>
        <View style={styles.translateOutputRow} >
          <Text style={{color:"#FFF"}}></Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  translateContainer:{
    backgroundColor:'#20232a',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent:'space-between'
  },
  translateInputRow:{
    flex:2,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  translateOutputRow:{
    borderTopWidth:0.2,
    borderColor:"#999",
    flex:3,
    paddingHorizontal:15,
    paddingVertical:15,
  },
  languageChoices: {
    backgroundColor: '#092e46',
    flex:2,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  translateInput:{
    flex:7,
  },
  languageSource:{
    flex:5,
    height:40,
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
    flex:1,
    paddingHorizontal:15,
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
});
