import React, { Component } from 'react';
import _ from 'lodash';

class CreateTodo extends Component {
  constructor(props){
  	super(props)

  		this.state = {
  			error: null
  		};

  }

  //handling the error
  renderError(){
  	//if theres no error , were going to have an early return so nothing happens
  	if (!this.state.error) {
  		return null;
  	}
  	//if theres an error return this
  	return <div style={{ color: 'red' }}> {this.state.error} </div>;
  }


  render() {
    // console.log(this.props.task)
    return (
        <form onSubmit={this.handleCreate.bind(this)}>
            <input type="text" placeholder="What I need to do?" ref="createInput" />
            <button>Create</button>
            {this.renderError()}
        </form>
    );
  }

 	handleCreate(event) {
 		//prevent default behavior of onSubmit refresh when submitting
 		event.preventDefault();

 		const createInput = this.refs.createInput;
 		const task = createInput.value;
 		const validateInput = this.validateInput(task);

 		if (validateInput) {
 			this.setState({ error: validateInput });
 			// if no error no need to get down to save point
 			return;
 		}
 		// if no error re render to original state status
 		this.setState({ error: null });

 		//display the input
 		//console.log(this.refs.createInput.value);
 		// console.log(this.props.createTask)
 		// this method is from main component
 		// refs display value on console
 		// this.props.createTask(this.refs.createInput.value);
 		this.props.createTask(task);
 		//clear the input after submitted
 		this.refs.createInput.value = '';

 	}

	//task here is from handleCreate const
 	validateInput(task) {
 		if(!task) {
 			return 'Please enter a task.';
 		} else if(_.find(this.props.todos, todo => todo.task === task)) {
 			return 'Task already exists.';
 		} else {
 			return null;
 		}
 	}

}

export default CreateTodo;
