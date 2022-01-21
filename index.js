/**
 * @format
 */

import Amplify, {AuthModeStrategyType} from 'aws-amplify';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import config from './src/aws-exports';

Amplify.configure({
  ...config,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
});

AppRegistry.registerComponent(appName, () => App);
