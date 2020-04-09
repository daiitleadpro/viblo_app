import React,{ Component } from "react";
import {View,Text, StyleSheet ,TextInput,TouchableOpacity,FlatList } from "react-native";

export const TaskItem = (item) => {
    console.log('vao ITEMMMM',item)
    return(
        <View style={{flex:1,backgroundColor:'white',width:'100%',borderWidth:1,height:80,justifyContent:"center"}}>
            <Text style={{color:'black',paddingLeft:5}}>
                {item.item.item.taskName}
            </Text>
        </View>
    )
} 