import {ListTask } from '../screen/todolist/list'
import {addNewTask} from '../action/index'
import {connect} from 'react-redux'
const mapStateToProps = (state) => {
    alert(`state sent to props = ${JSON.stringify(state)}`)
    return{

    }
}
const TaskListContainer = connect(mapStateToProps)(ListTask)
export default TaskListContainer