import React, { Fragment } from 'react';

//import Timer from './components/Timer/Timer';
import Bar from './components/UI/Bar';
import Navigation from './components/UI/Navigation';
import Timer from './components/Timer/Timer';
import PopUpButton from "./components/UI/PopUpButton";


function App() {
  return (
      <Fragment>
          <Navigation/>
          <Bar/>
          <Timer/>
          <PopUpButton/>
      </Fragment>
  );
}

export default App;
