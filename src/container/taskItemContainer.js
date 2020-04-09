import {TaskItem } from '../screen/todolist/taskItem'
import {toggleTask} from '../action/index'
import {connect} from 'react-redux'
const mapStateToProps = (state) => {
    return{

    }
}
const TaskItemContainer = connect()(TaskItem)
export default TaskItemContainer