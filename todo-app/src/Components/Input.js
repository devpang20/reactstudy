import React from 'react';

import styles from '../setting/Input.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

const Input = ({ onAdd, onChange, value }) => {
    const keyPress = (e) => {
        if(e.key === 'Enter'){
            onAdd();
        }
    }

    return (
        <div className={cx('input')}>
            <input onKeyPress={keyPress} onChange={onChange} value={value} />
            <div className={cx('add-button')} onClick={onAdd}>입력</div>
    </div>  
    );
};


export default Input;