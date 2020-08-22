import React from "react";
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, TouchableHighlight, ScrollView, Image,ImageBackground} from 'react-native'

export default class CustomDrawer extends React.Component {
  navigateToScreen = ( route ) =>(
    () => {
      this.props.navigation.navigate({routeName:route});
    })

  render() {
    const {activeItemKey, navigation} = this.props;
    const {navigate} = this.props.navigation;

    const image =  require('../../assets/background-menu.jpg');

    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={{width:"100%"}}>
          <View style={styles.profileMenu}>

            <Image
              style={styles.profileImage}
              source={require('../../assets/profile.jpg')}/>
            <View >
              <Text style={styles.profileMenuLink} onPress={navigate({routeName: 'Translate'})}>
                Üveys SERVETOĞLU
              </Text>
            </View>

          </View>
        </ImageBackground>

        <ScrollView>
          <View style={styles.navSectionStyle}>
            <TouchableHighlight
              underlayColor="none"
              style={styles.menuItemButton}
              onPress={navigate({routeName: 'Translate'})}>
              <Text style={styles.navItemStyle} >Translate</Text>
            </TouchableHighlight>

          </View>
          <View style={styles.navSectionStyle}>
            <TouchableHighlight
              underlayColor="none"
              style={styles.menuItemButton}
              onPress={navigate({routeName: 'WordList'})}>
              <Text style={styles.navItemStyle} >My Word</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>Dolphin Translate</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor:'#002841',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  },

  profileMenu:{
    paddingTop:30,
    paddingBottom:20,

    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#303d4e',
    borderBottomWidth: 1
  },
  profileImage:{
    height:100,
    width:100,
    borderWidth:3,
    borderColor:"#002841",
    borderRadius:50,
    padding:10
  },
  profileMenuLink: {
    paddingTop:7,
    fontSize:21,
    fontWeight: 'bold',
    color:"#fff"
  },
  menuItemButton:{
    height:'100%',
    width:'100%',
    paddingRight:15,
    paddingLeft:15,
    paddingTop:7,
    color:"#FFF"
  },
  navItemStyle: {
    padding: 10,
    fontSize: 18,
    color:'#FFF'
  },
  navSectionStyle: {
    height:55,
    justifyContent:'center',
    alignItems:'flex-start',
    borderColor: '#303d4e',
    borderBottomWidth: 1
  },
  footerContainer: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
  }
});
