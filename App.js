import React , {Component } from 'react';
import {
  Button,
   Alert,
   Text,
   View,
   StatusBar,
  StyleSheet} from "react-native";
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
      // <View>
      //   <StatusBar backgroundColor="blue"/>
      //   <Text style={styles.header}>First APp</Text>
      //   <Header person="Nama : Badra"/>
        
      //   <Footer tahun="2019"/>
      //   <Button title="Button tambah" onPress={this.handleTambah} />
      //   <Text style={styles.jumlah}>Jumlah : {this.state.jumlah}</Text>
      // </View>
      <View style={{flex:1,backgroundColor:"red"}}>
        <Text style={{flex:4,backgroundColor:"yellow",margin:20}}>Halaman 1</Text>
        <Text style={{flex:1,backgroundColor:"green"}} >Halaman 2</Text>
      </View>
    );
  }
}

// const styles =StyleSheet.create({
//   header:{
//     marginTop:20,
//     fontSize:20,
//     textAlign:"center"
//   },
//   jumlah:{
//     fontSize:20,
//     marginTop:30,
//     textAlign:"center",
//     color:"red"
//   }
// })