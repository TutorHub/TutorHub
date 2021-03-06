/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './components/homeScreen/home';
import Action from './components/dummy/actionButton';
import NavigationApp from './components/NavigationTesting/Navigation.js';
import BottomNavigation from './components/dummy/bottomTabNav';
import ModalApp from './components/ModalsPractice/Modal';
import MainNavigtion from './src/navigation/mainPages/index.js';
import {name as appName} from './app.json';
import TimeSlots from './src/testt/TimeSlots';
import ModalTest from './src/testt/ModalTest';

//AppRegistry.registerComponent(appName, () => BottomNavigation);
//AppRegistry.registerComponent(appName, () => NavigationApp);

AppRegistry.registerComponent(appName, () => MainNavigtion);
//AppRegistry.registerComponent(appName, () => TimeSlots);
//AppRegistry.registerComponent(appName, () => ModalTest);
