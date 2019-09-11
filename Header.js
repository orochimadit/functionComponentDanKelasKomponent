import React,{Component} from "react";
import {Text} from "react-native";


 class Header extends Component{
   
   constructor(props){
     super(props);
     this.state= {
      umur:this.props.usia
    }
   }
    render(){
      return<Text>{this.props.person}  {this.state.umur}</Text>
    }
  }

  export default Header