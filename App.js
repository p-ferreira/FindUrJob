import React from 'react';
import { 
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer 
} from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';
import { Provider } from 'react-redux'; 
import store from './store'
 

const reviewNavigator = createStackNavigator({
  review: { screen: ReviewScreen },
  settings : { screen: SettingsScreen }
})

const MainNavigator = createBottomTabNavigator({
  welcome: { screen: WelcomeScreen, navigationOptions: { tabBarVisible: false } },
  auth: { screen: AuthScreen , navigationOptions: { tabBarVisible: false } },
  main: {
    screen: createBottomTabNavigator({
      map: MapScreen,
      deck: DeckScreen,
      review: reviewNavigator
    }),
    navigationOptions: { tabBarVisible: false } 
  }
});

const AppContainer =  createAppContainer(MainNavigator);

class App extends React.Component {
  render() {
    return (                  
      <Provider store={store}>        
         <AppContainer />                    
      </Provider>      
    );
  }
}

export default App;