import React from 'react';

import css from './User.module.css'

const UserInfo = () => {
    return (
        <div className={css.User}>
            <img src='./avatar.jpg' alt='photo'/>
        </div>
    );
};

export {UserInfo};