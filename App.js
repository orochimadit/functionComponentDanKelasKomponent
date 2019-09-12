import React , {Component } from 'react';
import {Button, Alert,Text,View,StatusBar} from "react-native";
import Header from "./Header";
import Footer from "./Footer"
//belajar function component 


export default class App extends Component{
  constructor(){
    super();
    this.state={
      jumlah:0
    };
  }
  handleTambah=()=>{
   // Alert.alert("Ini adalah Handle Tambah");
   this.setState({
    jumlah:this.state.jumlah+1
   })
   
  }
  render(){
    return(
      <View>
        <StatusBar backgroundColor="blue"/>
        <Header person="Nama : Badra"/>
        <Text>First APp</Text>
        <Footer tahun="2019"/>
        <Button title="Button tambah" onPress={this.handleTambah} />
        <Text>Jumlah : {this.state.jumlah}</Text>
      </View>
    );
  }
}