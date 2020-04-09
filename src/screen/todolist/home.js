import React,{ Component } from "react";
import {View,Text} from 'react-native'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducer from '../../reducer/index';
import TaskManager from './taskmanager'
var store = createStore(allReducer)
export class HomeList extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(                   
                    <TaskManager/>
        )
    }
}