import React, { useEffect, useState } from 'react';

import {useDispatch} from 'react-redux';
import {getUserData} from './redux/actions/userActions'
import Routes from './routes'

// Style
import './assets/styles/global.css'

function App() {

  const dispatch = useDispatch();

  const [token, setToken] = useState('')

  useEffect( () => {
    setToken(localStorage.LSIdToken)
    if(token) {
      dispatch(getUserData(token.split('Bearer ')[1]))
    }
  }, [token, dispatch])

  return (
    <Routes />
  );
}

export default App;
