import React,{ Component } from "react";
import {View,Text  } from "react-native";
import  Header  from '../../component/common/header';

export class Series extends Component{
    render(){
        return(
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Header navigation={this.props.navigation}  title={'SERIES'}/>
            </View>
        )
    }
}