import React, { useEffect, useState } from 'react';
import api from './services/api';

import {Provider} from 'react-redux';
import store from './redux/store'
import {getUserData} from './redux/actions/userActions'
import Routes from './routes'

// Style
import './assets/styles/global.css'

function App() {

  const [token, setToken] = useState('')

  useEffect( () => {
    setToken(localStorage.LSIdToken)

    if(token) {
      getUserData(token)
    }
  }, [token])

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
