import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name : "홍길동"
    }
    render() {
        return (
            <div>
                안녕하세요, 제 이름은 {this.props.name} 입니다.
            </div>
        );
    }
}

MyComponent.propTypes = {
    name: PropTypes.string
}

export default MyComponent;