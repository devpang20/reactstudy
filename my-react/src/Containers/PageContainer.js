import React from 'react';

import styles from './PageContainer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PageContainer = ({ children }) => {
    return (
        <div className={cx('page-container')}>
            <h2>TODO App</h2>
            <div className = {cx('content')}>
                { children }            
            </div>
        </div>
    );
};

export default PageContainer;