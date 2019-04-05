import React, { Component } from 'react';

import Item from '../Components/Item';

class List extends Component {
    render() {
        const { todos } = this.props;
        const todoList = todos.map(
            todo => (<Item key ={todo.id} doit={todo.doit}>{todo.article}</Item>)
        );
        return (
            <div>{ todoList }</div>
        );
    }
}

export default List;


