import React from 'react';

import classes from '../../css/style.module.css';
const Timer = () => {
    return (
        <section>
            <div className={classes['timer-background']}>
                <div className={classes['timer-container']}>
                    <div className={classes['timer-indicator']}>
                        <h1 className={`${classes.heading} ${classes['heading--level-1']}`}>25:00</h1>
                        <h3 className={`${classes.heading} ${classes['heading--level-3']}`}>start</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timer;