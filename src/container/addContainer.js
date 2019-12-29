import {TodoList} from '../screen/todolist/todolist'
import {addNewTask} from '../action/index'
import {connect} from 'react-redux'
const mapStateToProps = (state) => {
    return{
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onClickAdd: (inputTaskName) => {
            dispatch(addNewTask(inputTaskName))
        }
    }
}
const AddContainer = (connect(mapStateToProps,mapDispatchToProps)(TodoList))
export default AddContainer