import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements';

export default class ReviewScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        title: "Review Jobs",
        headerRight: (            
            <Button 
                title="Settings" 
                onPress={() => navigation.navigate("settings")}
                buttonStyle={{backgroundColor:"rgba(0,0,0,0)"}}
                titleStyle={{color:"black"}}
                  />
        )
    })

    render() {
        return (
            <View>
                <Text> ReviewScreen </Text>
                <Text> ReviewScreen </Text>
                <Text> ReviewScreen </Text>
                <Text> ReviewScreen </Text>
                <Text> ReviewScreen </Text>                
            </View>
        )
    }
}
