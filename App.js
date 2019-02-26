import React from 'react';
import { 
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer 
} from 'react-navigation';
import { Alert } from 'react-native';

import { Icon } from 'react-native-elements';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';
import { Provider } from 'react-redux'; 
import store from './store';
import registerForNotifications from './services/push_notifications';
import { Notifications } from 'expo';
 
 

const MainNavigator = createBottomTabNavigator({
  welcome: { screen: WelcomeScreen, navigationOptions: { tabBarVisible: false } },
  auth: { screen: AuthScreen, navigationOptions: { tabBarVisible: false } },
  main: {
    screen: createBottomTabNavigator({
      map: MapScreen,
      deck: DeckScreen,
      review: {
        navigationOptions: {
          title: 'Trabalhos Selecionados',
          tabBarIcon: ({ tintColor }) => {
            return (<Icon name="favorite" size={30} color={tintColor} />);
          }
        },
        screen: createStackNavigator({
          review: { screen: ReviewScreen },
          settings: { screen: SettingsScreen }
        }),

      }
    }, {

        tabBarOptions: {
          labelStyle: { fontSize: 12 }
        }

      }),
    navigationOptions: { tabBarVisible: false }
  }
});

const AppContainer =  createAppContainer(MainNavigator);

class App extends React.Component {

  componentDidMount(){
    registerForNotifications();
    Notifications.addListener((notification) => {

      const { data: { text }, origin } = notification;

      if(origin === 'received' && text){
        Alert.alert('New Push Notification', text, [{ text: 'Ok'}]);
      }
    }); 
  }

  render() {
    return (                  
      <Provider store={store}>        
         <AppContainer />                    
      </Provider>      
    );
  }
}

export default App;