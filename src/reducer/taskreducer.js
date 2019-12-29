import {ADD_NEW_TASK,TOGGLE_ONE_TASK} from '../action/actionType'
const taskReducer = (tasks = [],action) => {
    console.log('vaoReducer')
    switch (action.type){
        case ADD_NEW_TASK :
        return [
            ...tasks,
            {
                taskId:action.taskId,
                taskName:action.taskName,
                completed:false 
            }
        ]
        case TOGGLE_ONE_TASK:
            return tasks.map(task => 
                (task.taskId == action.taskId) ? {...task , completed : !task.completed} : task
            )
        default:
        return tasks 
    }
}
export default taskReducer