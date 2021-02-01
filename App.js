import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLogin from "./Screens/SignUpLoginScreen";
import {createSwitchNavigator,createAppContainer} from "react-navigation";
import HomeScreen from "./Screens/HomeScreen";
import {AppTabNavigator} from "./Components/AppTabNavigator";
export default class App extends Component{
 render(){
   return(
    <AppContainer/>
   )
 }
}

var SwitchNavigator=createSwitchNavigator({
  SignUpLogin:{screen:SignUpLogin},
  AppTabNavigator:{screen:AppTabNavigator}

})

var AppContainer=createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
