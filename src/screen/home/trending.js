import React,{ Component } from "react";
import {View,Text  } from "react-native";
import  Header  from '../../component/common/header';
import DrawerTrigger from '../../component/common/drawertrigger';
export class Trending extends Component{
    
    render(){
        return(
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Header  title={'HOME'}/>
                {}
            </View>
        )
    }
}