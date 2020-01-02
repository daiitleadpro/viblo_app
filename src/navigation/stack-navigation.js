import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Login} from '../screen/login'
import { NewFeed } from '../screen/home/newfeed';
import {TodoList} from '../screen/todolist/todolist'
import TabbarNavigation from '../navigation/tabbar-navigation';
import DrawerNavigation from './draw-navigation'
import { View } from "react-native";
import { Series } from '../screen/series/series';
const routeConfig = {
  Login: Login,
  NewFeed: DrawerNavigation,
  HomeList:TodoList,
  Series:Series
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
// const DrawerNavigation = createDrawerNavigator({
//   Trending : Trending,
//   EditorsChoise:EditorsChoise,
//   NewFeed:NewFeed
// })
const StackNavigator = createStackNavigator(routeConfig,stackNavigatorConfig)


// const AppContainer = createSwitchNavigator({
//   Auth: StackNavigator,
//   Main: DrawerNavigation

// })
  
  export default createAppContainer(StackNavigator) ;