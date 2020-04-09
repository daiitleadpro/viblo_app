import React,{ Component } from "react";
import {View,Text,StyleSheet,TextInput} from 'react-native'
export const Input = (placeholder,onChangeText,style) => {
    return <TextInput
        placeholder= {placeholder}
        onChangeText = {onChangeText}
        value={value}
    />
}
