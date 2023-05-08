import React from 'react';

import classes from '../../css/style.module.css';

const Bar = () => {
    return (
        <section className={classes.bar}>
            <ul className={`${classes.bar__list} ${classes.paragraph} ${classes['paragraph--bigger']} ${classes['paragraph']}`}>
                <li className={classes['bar__list-item']}><a href="#" className={classes['bar__link']}>pomodoro</a></li>
                <li className={classes['bar__list-item']}><a href="#" className={classes['bar__link']}>short break</a></li>
                <li className={classes['bar__list-item']}><a href="#" className={classes['bar__link']}>long break</a></li>
            </ul>
        </section>

    );
};


export default Bar;

