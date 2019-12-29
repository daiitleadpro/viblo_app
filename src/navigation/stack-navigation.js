import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Login} from '../screen/login'
import { Home } from '../screen/home/home';
import {TodoList} from '../screen/todolist/todolist'
import { View } from "react-native";

const routeConfig = {
  Login: Login,
  Home: Home,
  HomeList:TodoList
}

const stackNavigatorConfig = {
  initialRouteName: 'Login',
  mode: 'card',
  headerMode: 'screen',
  defaultNavigationOptions: ({navigation}) => {
    return{
      header:null,
      gesturesEnabled: false
    }
    
  }
}
const StackNavigator = createStackNavigator(routeConfig,stackNavigatorConfig)
  
  export default createAppContainer(StackNavigator);