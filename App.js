import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

export default () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#2a64e8" />
    <Routes />
  </>
);
