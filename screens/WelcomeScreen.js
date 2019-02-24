import _ from 'lodash'
import React, { Component } from 'react'
import { Text, View , AsyncStorage} from 'react-native';
import Slides from '../components/Slides';
import { AppLoading } from 'expo';


const SLIDE_DATA = [    
    {text: 'Bem vindo ao FindUrJob', color: '#03A9F4'},
    {text: 'Use para achar o seu futuro trabalho', color: '#009688'},
    {text: 'Selecione sua localização e arraste para o lado', color: '#03A9F4'}    
]

export default class WelcomeScreen extends Component {    
        
    constructor() {
      super()
    
      this.state = {
         token : null
      }
    }
    
    async componentWillMount(){
        let token = await AsyncStorage.getItem('fb_token');
        
        if(token){
            this.props.navigation.navigate('map');
            this.setState({ token })
        } else{
            this.setState({ token: false })
        }

    }

    onSlidesComplete = () =>{
        this.props.navigation.navigate('auth');
    }
    

    render() {
        if(_.isNull(this.state.token)) {
            return <AppLoading />;
        }


        return (
            <Slides data={SLIDE_DATA}
                    onComplete={this.onSlidesComplete} />
        )
    }
}
