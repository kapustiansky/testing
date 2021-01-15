import React, { Component } from 'react';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import ItemAddForm from "../item-add-form";

import './app.css';

class App extends Component {
	constructor() {
		super();
		this.maxId = 100;

		this.state = {
			todoData: [
				this.createTodoItem('Купить хлебушка'),
				this.createTodoItem('Вычеркнуть хлебушек из списка'),
				this.createTodoItem('Learn React'),
			],
			term: ''
		}
	}

	deleteItem = (id) => {
		this.setState(({todoData}) => {
			const idx = todoData.findIndex((el) => el.id === id);
			const before = todoData.slice(0, idx);
			const after = todoData.slice(idx + 1);
			const newArr = [ ...before, ...after ];
			return {
				todoData: newArr
			}
		})
	}

	addItem = (text) => {
		const newItem = this.createTodoItem(text);
		this.setState(({todoData}) => {
			const newArr = [ ...todoData, newItem ];
			return {
				todoData: newArr
			}
		})
	}

	toggleProperty = (arr, id, propName) => {
		const idx = arr.findIndex((el) => el.id === id);
		const oldItem = arr[idx];
		const newItem = { ...oldItem, [propName]: !oldItem[propName]}
		return [ ...arr.slice(0, idx),
						newItem,
						...arr.slice(idx + 1) ];
	}

	onToggleImportant = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'important')
			}
		  })
	}

	onToggleDone = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'done')
			}
		  })
	}

	createTodoItem = (label) => {
		return {
			label,
			important: false,
			done: false,
			id: this.maxId++
		}
	}

	onSearchCange = (term) => {
		this.setState({ term })
	};

	search = (items, term) => {
		if(term.length === 0) {
			return items;
		}

		return items.filter((item) => {
			return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
		});
	}
	
	render() {
		const { todoData, term } = this.state;
		const visibleItems = this.search(todoData, term);
		const doneCount = todoData.filter((el) => el.done).length;
		const todoCount = todoData.length - doneCount;
		return	(
			<section className="container-sm px-sm-5 py-1 py-md-5">
				<AppHeader 
					toDo={todoCount}
					done={doneCount}
					onSearchCange={this.onSearchCange}/>
				<TodoList 
					todos={visibleItems}
					onDeleted={this.deleteItem}
					onToggleDone={this.onToggleDone}
					onToggleImportant={this.onToggleImportant}/>
				<ItemAddForm 
					onAdd={this.addItem}/>
			</section>
		);
	}
}

export default App;