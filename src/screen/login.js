import React,{ Component } from "react";
import {View,Text,StyleSheet} from 'react-native'
export class Login extends Component {
    render(){
        return(
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.textheader}>Login</Text>
                <Text style={[styles.textheader,{fontSize:15,marginTop:2}]}>VIBLO</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textheader:{
        fontSize:24,
        color:"blue",
        marginTop:80,
        justifyContent:'center',
        fontWeight:'700'
    },
    container:{
        
    }
})