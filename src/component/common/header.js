import React from 'react'
import {  View, StyleSheet,Text,TouchableOpacity,Image, Dimensions} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DrawerTrigger from './drawertrigger';
const {width,height} = Dimensions.get('window')
export default Header = ({title,toggleDrawer}) => {
   
    return(
        <View style={styles.container}>
            <View style={{flexDirection:"row",alignItems:'center',width:"50%",height:80}}>
                <DrawerTrigger/>
                <Text style ={{fontSize:18,fontWeight:'700',color:'#3f78eb'}}>{title}</Text>
            </View>
            <View style={{flexDirection:"row",alignItems:'center',width:"50%",height:80}}>
                <FontAwesome name={'search'} size={25} color={'black'} 
                style ={{paddingLeft:width*0.3}}/>
                <AntDesign name={'notification'} size={25} color={'black'} 
                style ={{paddingLeft:width*0.04}}/> 
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{

        paddingTop:10,
        flexDirection:'row',
        width:'100%',
        height:80,
        //justifyContent:"space-around",
        alignItems:'center',
        borderEndColor:'gray',
        borderWidth:1
    }
})