import React, { Component } from 'react';

class TodosListItem extends Component {
    constructor(props) {
        super(props);
        // this.onClick = this.onClick.bind(this);

        this.state = {
            isEditing: false
        }
    }
    renderActionSelection(){
        //this will be the layout when editing
        if(this.state.isEditing){
            return(
                <td>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>  
            );
        }
        //this will be the default layout
        return(
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
            </td>
        );
    }
    renderTaskColor() {
        //converted to variable 'task'
        const { task, isCompleted } = this.props;
        //display the object
        // console.log(this.props);
        const styleColor = {
            //ternary operator on react if true = green, false = red
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };

        //when editing change task to input type
        if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={task} ref="editInput" />
                    </form>
                </td>
            );
        }

        return (
            <td style={styleColor}
                //bind task to be able to passed into this method
                onClick={this.props.toggleTask.bind(this, task)}>
                {task}
            </td>
        );
    }

  render() {
    // console.log(this.props.task)
    return (
        <tr>
            {/* <td>{this.props.task}</td> */}
            {this.renderTaskColor()}
            {this.renderActionSelection()}
    	</tr>
    );
  }


    //status of edit button after it was clicked
    onEditClick() {
        this.setState({ isEditing: true });
    }
    //back to original state
    onCancelClick() {
        this.setState({ isEditing: false });
    }
    onSaveClick(event){
        event.preventDefault();

        const oldTask = this.props.task; //pass our old array to oldTask
        const newTask = this.refs.editInput.value; //reference that we define on input type
        this.props.saveTask(oldTask, newTask); //saveTask are from main component thats why declare as props
        this.setState({ isEditing: false });
    }

}

export default TodosListItem;
