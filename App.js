/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react'
import RootStack from './src/navigation/RootStack';

import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';
import { getLoggedUser } from './src/store/actions';

const App = () => {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoggedUser());
  }, [])

  return (
    <>
      <RootStack />
      <Toast visibilityTime={3000} topOffset={80} />
    </>
  )
}

export default App
