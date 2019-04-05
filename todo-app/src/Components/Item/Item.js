import React, { Component } from 'react';

import styles from './Item.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Item extends Component {
    render() {
        const { onToggle, onRemove, doit, children } = this.props;
        return (
            <div className={cx('item')} onClick = {onToggle}> 
                <input type = "checkbox" className={cx('check')} checked={doit} readOnly />
                <div className = {cx('article', {doit})}>
                    {children}
                </div>
                <div className={cx('remove')} onClick={onRemove}>
                    삭제
                </div>
            </div>
        );
    }
}

export default Item;