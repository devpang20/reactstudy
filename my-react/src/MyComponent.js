import React, { Component } from 'react';

class MyComponent extends Component {
    render() {
        return (
            <div>
                안녕하세요, 제 이름은 {this.props.name}
            </div>
        );
    }
}

export default MyComponent;