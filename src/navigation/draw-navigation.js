import React, { Component } from 'react';
import { Button, View, Text, Image, TouchableOpacity,SafeAreaView } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import TabbarNavigation from '../navigation/tabbar-navigation';
import {EditorsChoise} from '../screen/home/editors-choice'
import StackNavigator from './stack-navigation'
import { Trending } from '../screen/home/trending';
import {NewFeed} from '../screen/home/newfeed'
import { Login } from '../screen/login';
import { ScrollView } from 'react-native-gesture-handler';
import { Series } from '../screen/series/series';

export const Page = ({nameIcon,namePage,onPress}) => {
    
    return(
        <TouchableOpacity style={{flexDirection:"row",marginVertical:20}} onPress={onPress}>
                <FontAwesome name={nameIcon} color={"#3f78eb"} style={{paddingLeft:30}} size={25}  />
                <Text style={{fontSize:20,fontWeight:'500',paddingLeft:20}}>{namePage}</Text>
            </TouchableOpacity>
    )
    
}

const CustomDrawerNavigation = (props) => {
    console.log('propsss',props)
    return(
        <SafeAreaView style = {{flex:1}}>
        <View style={{marginLeft:20,marginTop:10}}>
            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> props.navigation.navigate('Login')}>
                <Image source={require('../access/abc.jpeg')} style={{width:50,height:50,borderRadius:50,paddingRight:30}}/>
                <Text style={{paddingTop:10,paddingLeft:20,fontSize:25, fontWeight:'700',color:'gray'}}>Guest</Text>
            </TouchableOpacity>
        </View>
        <ScrollView style={{marginTop:50}}>
            {/* <DrawerItems {...props}/> */}
            <Page nameIcon={"newspaper-o"} namePage={"Ports"} onPress={() => props.navigation.navigate('NewFeed')}/>
            <Page nameIcon={"newspaper-o"} namePage={"Series"} onPress={() => props.navigation.navigate('Series')}/>
        </ScrollView>
    </SafeAreaView>
    )
    
}
const DrawerNavigation = createDrawerNavigator({
    
    Home:{
        screen: TabbarNavigation,
        navigationOptions:{
            drawerLabel: 'Posts',
            drawerWidth: 200,
            drawerIcon: ({ tintColor }) => <FontAwesome name={"newspaper-o"} style={{}} size={25} color={tintColor} />,
        }
    },
    // Login:{
    //     screen:Login,
    //     navigationOptions:{
    //         drawerLabel:'Guest',
    //         drawerIcon:() => <Icon name = "people" size={30}/>
    //     }
    // },
    NewFeed:{
        screen: TabbarNavigation,
        navigationOptions: {
         drawerLabel: 'Series',
         drawerIcon: ({ tintColor }) => <Icon name="cog" size={17} />,
       }
     },
    Trending : {
       screen: TabbarNavigation,
       navigationOptions: {
        drawerLabel: 'Trending',
        drawerIcon: ({ tintColor }) => <Icon name="cog" size={17} />,
      }
    },
    EditorsChoise:{
       screen: TabbarNavigation,
       navigationOptions: {
        drawerLabel: 'Editor',
        drawerIcon: ({ tintColor }) => <Icon name="cog" size={17} />,
      }
    },
    Series:{
        screen:Series,
        navigationOptions: {
            drawerLabel: 'Editor',
            drawerIcon: ({ tintColor }) => <Icon name="cog" size={17} />,
          }
    }
    
},
{
    contentComponent:CustomDrawerNavigation
})
export default DrawerNavigation