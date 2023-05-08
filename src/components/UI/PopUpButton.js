import React from 'react';

import classes from '../../css/style.module.css';
const PopUpButton = () => {
  return (
      <section className={classes['popup']}>
          <div className={classes['popup__button']}>
              <img src="../../assets/icon-settings.svg"/>
          </div>
      </section>
  );
};

export default PopUpButton;