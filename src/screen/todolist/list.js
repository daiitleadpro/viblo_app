import React,{ Component } from "react";
import {View,Text, StyleSheet ,TextInput,TouchableOpacity,FlatList } from "react-native";
import TaskItemContainer from '../../container/taskItemContainer';
import { connect } from "react-redux";
import { TaskItem } from "./taskItem";
class ListTask extends Component {  
    render(){
        console.log('vaoFlatlist',this.props)
        return(        
            <FlatList
            data = {this.props.tasks}
            renderItem = {item => <TaskItem item ={item}/>
                //console.log('itemmmmm',item)
                // 
            }
            keyExtractor={(item,index) => item.tasksId}
            />
            
        )
    }
    }
        
const mapStateToProps = (state) => {
    //alert(`state sent to props = ${JSON.stringify(state)}`)
    return{
        tasks : !state.taskReducer ? [] : state.taskReducer
    }
}
exports.ListTask = connect(mapStateToProps)(ListTask)
