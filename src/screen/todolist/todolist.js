import React,{ Component } from "react";
import {View,Text, StyleSheet ,TextInput,TouchableOpacity } from "react-native";
import {connect} from 'react-redux'
import {addNewTask} from '../../action/index'
import { ListTask } from './list';
import { TaskItem } from "./taskItem";
//import { TextInput } from "react-native-gesture-handler";
 export class TodoList extends Component{
    constructor(props){
        super(props)
        this.state={
            taskName:''
        }
    }
    addNewTask = () => {
        console.log('poprss',this.props)
        if(!this.state.taskName.trim()){
            alert('you need add new task')
        }
            const {dispatch} = this.props
            dispatch(addNewTask(this.state.taskName))
            this.setState({taskName:''})
        
       
        
        //this.props.onClickAdd(this.state.taskName)

    }
    render(){
        //console.log('Storeeee',this.props)
        return(
            <View style={styles.container}>
                <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center',backgroundColor:'red',marginTop:15}}>
                    <TextInput
                    value={this.state.taskName}
                    placeholder={'Add new task'}
                    placeholderTextColor={'white'}
                    style={styles.addTask}
                    onChangeText={text => this.setState({taskName:text})}
                    />
                    <TouchableOpacity
                        onPress={this.addNewTask}
                         style={styles.buttonAdd}>
                        <Text style={{fontSize:30,color:'white'}}>+</Text>
                    </TouchableOpacity>
                   
                </View>
                <ListTask/>
            </View>
        )
    }
}
// const mapStateToProps = (state) => {
//     console.log('co vao nhes',state)
//     //alert(`state sent to props = ${JSON.stringify(state)}`)
//     return{
//         tasks : !state.taskReducer ? [] : state.taskReducer
//     }
// }
const styles = StyleSheet.create({
    container:{
        //backgroundColor:'black'
        //flex:1
    },
    addTask:{
        color:'white',
        paddingLeft:5,
        borderColor:'white',
        width:'80%',
        height:50,
        marginTop:15,
        marginBottom:15,
        borderWidth:1,
        borderRadius:5,
        backgroundColor:'red'
    },
    buttonAdd:{
        marginLeft:5,
        marginBottom:15,
        borderWidth:1,
        borderColor:'white',
        marginTop:15,
        justifyContent:'center',
        alignItems:"center",
        width:50,
        height:50,
        borderRadius:50,
        backgroundColor:'red'
    }
})
exports.TodoList = connect()(TodoList)