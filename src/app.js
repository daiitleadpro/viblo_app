import React,{ Component } from "react";
import {View,Text} from 'react-native'
import  AppNavigator from "../src/navigation/stack-navigation";
import {Login} from '../src/screen/login'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducer from "./reducer/index";
import DrawerNavigation from './navigation/draw-navigation'
import StackNavigator from './navigation/stack-navigation'
//import TaskManager from './screen/todolist/taskmanager'
var store = createStore(allReducer)
export default class App extends Component {
    constructor(props){
        super(props)
        
    }
    render(){
        console.log('Store',store)
        return(
                <Provider store={store}>
                    <StackNavigator/>                   
                </Provider>
                
           
        )
    }
}