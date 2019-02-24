import React, { Component } from 'react';
import { AsyncStorage, Text, View } from 'react-native';
import { connect } from 'react-redux';
import  * as actions  from '../actions/';


class AuthScreen extends Component {

    componentDidMount(){        
        this.props.facebookLogin();       
        this.onAuthComplete(this.props);
    }

    onAuthComplete(props){
        if(props.token){
            this.props.navigation.navigate('map')
        }
    }

    componentWillReceiveProps(nextProps){
        this.onAuthComplete(nextProps);
    }
    
    render() {
        return (
            <View>
                <Text> AuthScreen </Text>
                <Text> AuthScreen </Text>
                <Text> AuthScreen </Text>
                <Text> AuthScreen </Text>
                <Text> AuthScreen </Text>
            </View>
        )
    }
}

function mapStateToProps({ auth }){
    return { token : auth.token }
}

export default connect(mapStateToProps, actions)(AuthScreen)
