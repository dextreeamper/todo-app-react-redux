import React, { Component } from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo'
import _ from 'lodash';
import '../App.css';

const todos = [
{
	task: 'watching react tuts',
	isCompleted: true
},
{
	task: 'eat dinner',
	isCompleted: false
}
];

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos
			//todos: todos -> es6 code
		}
	}

  render() {
    return (
      <div className="App">
        <h1>React Todos App</h1>
        <CreateTodo 
        	todos={this.state.todos} 
        	createTask={this.createTask.bind(this)} 
        />
				<TodosList 
					todos={this.state.todos} 
					//bind thid because were setting the state
					toggleTask={this.toggleTask.bind(this)}
					saveTask={this.saveTask.bind(this)}
					deleteTask={this.deleteTask.bind(this)}
				/>
      </div>
    );
  }

  //this method change the isCompleted status when clicking the todo
  //find todo task that matches were passing in which is task that we clicked
  toggleTask(task) {
  	//find the todo that we clicked
  	//find the todo array that matches the todo that were editing
  	//1st this will be the array this.state.todos
  	//2nd find the todo task that matches the task todo => todo.task === task
  	const foundTodo = _.find(this.state.todos, todo => todo.task === task);
  	//swap the status of isCompleted
  	foundTodo.isCompleted = !foundTodo.isCompleted;
  	console.log(foundTodo);
  	//re-render the state
  	this.setState({ todos: this.state.todos });
  }

  //push all the task to todos state from input
  //push to react dom / push the task to state and rerender the state
  createTask(task) {
  	this.state.todos.push({
  		task,
  		isCompleted: false
  	});
  	//re-render this state with a new array 
  	this.setState({ todos: this.state.todos });
  }

  saveTask(oldTask, newTask) {
  	//find the todo that we clicked which is oldTask and change it to newTask
  	const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
  	foundTodo.task = newTask;
  	this.setState({ todos: this.state.todos });
  }

  deleteTask(deleteTaskTodo) {
  	_.remove(this.state.todos, todo => todo.task === deleteTaskTodo)
  	this.setState({ todos: this.state.todos });
  }

}

export default App;






