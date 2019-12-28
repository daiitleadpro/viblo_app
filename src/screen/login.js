import React,{ Component } from "react";
import {View,Text,StyleSheet,TextInput, TouchableOpacity} from 'react-native'
import {Inputs} from '../component/common/input'
import {LoginManager} from 'react-native-fbsdk'
import LinearGradient  from 'react-native-linear-gradient';
import { ModalT } from '../component/common/modal';
//import { TouchableOpacity } from "react-native-gesture-handler";
const pinCode = '1111'
export class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            isModalVisible: false,
            openModal:false,
            code:''
        }
    }

    loginFace  = async () => {
        console.log('vao')
        let result = await LoginManager.logInWithPermissions(['public_profile'])
        console.log('vao2',result)
        if(result.isCancelled){
            alert('login failed')
        }
        else{
            this.props.navigation.navigate('Home')
        }
    }
    openModal = async () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }
    loginGoogle = async () => {
        if(this.state.code === pinCode){
            this.props.navigation.navigate('TodoList')
            this.setState({isModalVisible:false})
            
        }else{
            alert('password is wrong')
        }
    }
    
    render(){
        return(
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.textheader}>Login</Text>
                <Text style={[styles.textheader,{fontSize:14,fontWeight:"100",marginTop:2}]}>VIBLO</Text>
                <TextInput
                    style = {styles.inputs}
                    placeholder = "Enter username"
                />
                <TextInput
                    style = {styles.inputs}
                    placeholder = "Enter password"
                />
                <LinearGradient colors={['#5587ed', '#3f76e8', '#306ce6']} style = {styles.button}>

                <TouchableOpacity >
                    <Text style={{color:'white',fontWeight:'700'}}>Sign In</Text>
                </TouchableOpacity>
                </LinearGradient>
                
                <View style={styles.viewrow}>
                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                <TouchableOpacity onPress={this.loginFace} style = {styles.icon} >
                        <Text style={{color:'white',fontWeight:'700',fontSize:25}}>f</Text>
                    </TouchableOpacity>  
                </LinearGradient>
                    
                <LinearGradient colors={['#eb3f4c', '#e0000f', '#e00007']} style={styles.linearGradient}>
                <TouchableOpacity onPress = {this.openModal} style = {styles.icon} >
                        <Text style={{color:'white',fontWeight:'700',fontSize:25}}>G+</Text>
                    </TouchableOpacity> 
                </LinearGradient>
                <ModalT 
                isVisible = {this.state.isModalVisible} 
                toggleModal ={this.openModal} 
                value={this.state.code}
                loginGG={this.loginGoogle}
                onChangeText={text=> this.setState({code:text})}/>
                </View>
                
                <View style={styles.viewrow}>
                    <Text style={{color:'gray',paddingTop:5}}>Don't have account.</Text>
                    <Text style={{color:'#3f78eb',paddingLeft:4,fontSize:20,fontWeight:'700'}}>Register!</Text>
                </View>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textheader:{
        fontSize:35,
        color:"#3f78eb",
        marginTop:80,
        justifyContent:'center',
        fontWeight:'700'
    },
    inputs:{
        paddingLeft:10,
        marginTop:30,
        width:350,
        height:60,
        borderColor:'gray',
        borderWidth:1,
        borderRadius:50

    },
    linearGradient: {
        justifyContent:"center",
        alignItems:'center',
        marginHorizontal:5,
        width:50,
        height:50,
        borderRadius: 50
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
    button:{
        marginTop:20,
        width:200,
        height:50,
        backgroundColor:'#3f78eb',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
    viewrow:{
        flexDirection:'row',
        marginTop:20
    },
    icon:{
        width:'100%',
        height:'100%',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    }
})