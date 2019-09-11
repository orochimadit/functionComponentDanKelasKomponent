import React from "react";
import {View,Text} from "react-native";
Footer  = (props) =>{
    var belajar="@badra";  
    return(
        <View>
          <Text>Ini adalah Footer</Text>
          <Text>{belajar} {props.tahun}</Text>
        </View>
      );
  }

  export default Footer