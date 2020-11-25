import React, { useEffect } from 'react';

import {Provider} from 'react-redux';
import store from './redux/store'


import Routes from './routes'

// Style
import './assets/styles/global.css'


function App() {

  useEffect( () => {
    console.log(localStorage)
  })

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
