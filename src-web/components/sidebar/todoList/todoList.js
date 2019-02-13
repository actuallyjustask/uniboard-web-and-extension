import React, { Component } from 'react';
import TodoHeader from './todoHeader'
import TodoForm from './todoForm'
import TodoBody from './todoBody'

var todoItems = [];
todoItems.push({index: 1, value: "learn react", done: false, priority: "high"});
todoItems.push({index: 2, value: "Go shopping", done: false, priority: "medium"});
todoItems.push({index: 3, value: "buy flowers", done: false, priority: "low"});
todoItems.push({index: 4, value: "buy noodles", done: false, priority: "high"});


  
class TodoApp extends React.Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.removeItemAll = this.removeItemAll.bind(this);

    this.state = {todoItems: todoItems};
  }
  addItem(todoItem) {
    todoItems.unshift({
      index: todoItems.length+1, 
      value: todoItem.newItemValue, 
      done: false
    });
    this.setState({todoItems: todoItems});
  }
  removeItem (itemIndex) {
    todoItems.splice(itemIndex, 1);
    this.setState({todoItems: todoItems});
  }

  removeItemAll () {

        var newList = todoItems.filter(item => !item.done)
        // console.log(todoItems)
        todoItems = newList
        this.setState({todoItems : todoItems} );

  }

  markTodoDone(itemIndex) {
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({todoItems: todoItems});  
  }
  render() {
    return (
      <div id="todoApp">
        <TodoHeader items={todoItems} />
        <TodoBody items={todoItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
        <TodoForm addItem={this.addItem} items={todoItems} removeItemAll={this.removeItemAll}/>
      </div>
    );
  }
}

export default TodoApp;