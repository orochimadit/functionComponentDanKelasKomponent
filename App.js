import React , {Component } from 'react';
import {Platform, StyleSheet,Text,View,StatusBar} from "react-native";
import Header from "./Header";
import Footer from "./Footer"
//belajar function component 


export default class App extends Component{
  render(){
    return(
      <View>
        <StatusBar backgroundColor="blue"/>
        <Header/>
        <Text>First APp</Text>
        <Footer/>
      </View>
    );
  }
}