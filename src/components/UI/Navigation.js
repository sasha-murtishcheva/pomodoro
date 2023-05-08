import React from 'react';

import classes from '../../css/style.module.css';

const Navigation = () => {
    return (
        <header className={classes.header}>
            <h2 className={`${classes.heading} ${classes['heading--level-2']}`}>pomodoro</h2>
        </header>
    );
};

export default Navigation;