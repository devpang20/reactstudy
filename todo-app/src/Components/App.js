import React, { Component } from 'react';

import PageContainer from '../Containers/PageContainer';
import Input from '../Components/Input';
import List from '../Containers/List';


class App extends Component {
  
  state = {
    input : '',
    todos: [
      {id: 0, article: 'test', doit: true},
      {id: 1, article: 'test2', doit: false},
    ]
  }
  
  handleChange = (e) => {
    const {value} = e.target;
    this.setState({input : value});
  }

  render() {

    const { input, todos } = this.state;
    const { handleChange } = this;


    return (
          <PageContainer>
           <Input onChange={handleChange} value={input}/>
           <List todos = {todos}/>    
          </PageContainer>
    ); 
  }
}

export default App;
