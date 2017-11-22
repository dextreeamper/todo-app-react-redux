import React, { Component } from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';
import _ from 'lodash'; //make easier call the method name

class TodosList extends Component {	
	renderItems (){
    //pass every props from parent component using ..props
    //using omit to not include our props todos to our variable
    const props = _.omit(this.props, 'todos');

		return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props}/>);
    // map creates an array without imutating it so we can edit it
    // used this for lodash
		//return for each todo item or TodosListItem with a key{}
		//each key has a separate index
		// let tasks = this.props.todos;
		// return tasks.map((todo, index) => <TodosListItem key={index} {...todo} />);
	}
  render() {
 		//console.log(this.props.todos);
    return (
      <table>
      	<TodosListHeader />
      		<tbody>
      			{this.renderItems()}
      		</tbody>
      </table>
    );
  }
}

export default TodosList;
