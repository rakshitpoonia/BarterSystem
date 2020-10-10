import React, { Component} from 'react';
import {View, Text,TouchableOpacity,StyleSheet} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer'


import firebase from 'firebase';

export default class CustomSidebarMenu extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <DrawerItems {...this.props}/>
        <View style={styles.logOutContainer}>
          <TouchableOpacity style={styles.logOutButton}
          onPress = {() => {
              this.props.navigation.navigate('WelcomeScreen')
              firebase.auth().signOut()
          }}>
            <Text style={styles.logOutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
var styles = StyleSheet.create({
    container : {
      flex:1
    },
    drawerItemsContainer:{
      flex:0.8,
    },
    logOutContainer : {
      flex:0.2,
      justifyContent:'flex-end',
      paddingBottom:30
    },
    logOutButton : {
      height:30,
      width:'35%',
      borderWidth:2,
      justifyContent:'center',
      padding:10
    },
    logOutText:{
      fontSize:15,
      fontWeight:'bold'
    }
  })