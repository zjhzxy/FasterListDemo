/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import FlatListDemo from './pages/FlatListDemo';
import SwipeableFlatListDemo from './pages/SwipeableFlatListDemo';
import SectionListDemo from './pages/SectionListDemo';
import {name as appName} from './app.json';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const navigator = createStackNavigator({
    App:{
        screen: App,
        navigationOptions:{
            title: 'Welcome'
        }
    },
    FlatListDemo:{
        screen: FlatListDemo,
        navigationOptions:{
            title: 'FlatListDemo',
        },
    },
    SwipeableFlatListDemo:{
        screen: SwipeableFlatListDemo,
        navigationOptions:{
            title: 'SwipeableFlatListDemo',
        }
    },
    SectionListDemo:{
        screen: SectionListDemo,
        navigationOptions:{
            title: 'SectionListDemo',
        }
    }
});

const AppRoot = createAppContainer(navigator)

AppRegistry.registerComponent(appName, () => AppRoot);
