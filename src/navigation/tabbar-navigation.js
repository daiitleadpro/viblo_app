import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'

import Ionicons from 'react-native-vector-icons/Ionicons';
import { EditorsChoise } from '../screen/home/editors-choice';
import { Trending } from '../screen/home/trending';
import { NewFeed } from '../screen/home/newfeed';
//import {createDrawerNavigator } from 'react-navigation-drawer';
const RouteConfigs = {
    NewFeed: NewFeed,
    EditorsChoise: EditorsChoise,
    Trending:Trending
  }
 
//const DrawerNavigation = createDrawerNavigator(RouteConfigs)
const TabbarNavigation = createBottomTabNavigator(RouteConfigs,{
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          //let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'NewFeed') {
            iconName = `newspaper-o`
            return <FontAwesome name={iconName} size={25} color={"#3f78eb"} />
            // Sometimes we want to add badges to some icons.
            // You can check the implementation below.
            //IconComponent = HomeIconWithBadge;
          } else if (routeName === 'EditorsChoise') {
            iconName ='viacoin'
            return <FontAwesome name={iconName} size={25} color={"#3f78eb"} />
             
            //iconName = `ios-options`;
          }
          else if (routeName === 'Trending') {
            iconName = `trending-up`
            return <Feather name={iconName} size={25} color={"#3f78eb"} />
          }
    
          // You can return any component that you like here!
          //return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
       // activeBackgroundColor:"#3f78eb"
        activeTintColor: "#3f78eb",
        inactiveTintColor: 'gray',
      },
})
export default TabbarNavigation