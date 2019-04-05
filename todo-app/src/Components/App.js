import React, { Component } from 'react';

import PageContainer from '../Containers/PageContainer';
import Input from '../Components/Input';
import List from '../Containers/List';


class App extends Component {
  render() {
    return (
          <PageContainer>
           <Input />
           <List />    
          </PageContainer>
    ); 
  }
}

export default App;
