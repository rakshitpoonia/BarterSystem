import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SignupLoginScreen from './screens/SignupLoginScreen';
import HomeScreen from './screens/HomeScreen'
import Exchange from './screens/Exchange';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSidebarMenu from './components/CustomSidebarMenu';
import SettingScreen from './screens/SettingScreen';

export default function App() {
  return (
    <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator({
    HomeScreen: {screen: HomeScreen},
    Exchange: {screen: Exchange},
  },
  {
    defaultNavigationOptions: ({navigation})=>({
      tabBarIcon: ()=>{
        const routeName = navigation.state.routeName;
        if(routeName === "HomeScreen"){
          return(
            <Image
            source={require("./assets/home-icon.png")}
            style={{width:20, height:20}}
          />
          )

        }
        else if(routeName === "Exchange"){
          return(
            <Image
            source={require("./assets/ads-icon.png")}
            style={{width:20, height:20,}}
          />)

        }
      }
    })
  }
);

const AppDrawNavigator = createDrawerNavigator({
  Home : {
    screen : TabNavigator
    },
  Settings : {
    screen : SettingScreen
    }
  },
  {
    contentComponent:CustomSidebarMenu
  },
  {
    initialRouteName : 'Home'
  })

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: SignupLoginScreen},
  AppDrawNavigator : AppDrawNavigator,
})

const AppContainer =  createAppContainer(switchNavigator);