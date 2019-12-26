import React,{ Component } from "react";
import {View,Text} from 'react-native'
import  AppNavigator from "../src/navigation/stack-navigation";
import {Login} from '../src/screen/login'
export default class App extends Component {
    render(){
        return(
           
                <AppNavigator/>
           
        )
    }
}