import React,{Component} from 'react'
import {View} from 'react-native'
import AddContainer from '../../container/addContainer'
import TaskListContainer from '../../container/taskListContainer'
export default class TaskManager extends Component{
    render(){
        return(
            <View>
                <AddContainer/>
                <TaskListContainer/>
            </View>
        )
    }
}