import React,{Component} from "react";
import {Text,TextInput,View} from "react-native";


 class Header extends Component{
   
   constructor(props){
     super(props);
     this.state= {
      umur:this.props.usia,
      inputan:""
    }
   }
   handleInput=(events)=>{
    this.setState({inputan:events})
   }
    render(){
      return(
      <View>
      <Text>{this.props.person}  {this.state.umur}</Text>
      <TextInput onChangeText={this.handleInput} 
      placeholder="masukkan Inputan"
      value={this.state.inputan}/>
      <Text>ini adalah text : {this.state.inputan}</Text>
      </View>
      )
    }
  }

  export default Header