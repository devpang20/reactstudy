import React, { Component } from 'react';

import Item from '../Components/Item';

class List extends Component {
    render() {
        return (
            <>
                <Item>테스트1</Item>
                <Item>테스트2</Item>  
                <Item>테스트3</Item>
            </>
        );
    }
}

export default List;