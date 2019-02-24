import React, { Component } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { MapView, Permissions } from 'expo';
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import * as actions from '../actions'

class MapScreen extends Component {

  constructor() {
    super()
  
    this.state = {
       mapLoaded: false,
       region: {
         longitude: -122,
         latitude: 37,
         longitudeDelta: 0.04,
         latitudeDelta: 0.09
       }
    }
  }
  
  async componentDidMount(){
    await Permissions.askAsync(Permissions.LOCATION);
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region });
  }

  onButtonPress = () => {
     this.props.fetchJobs(this.state.region, () => {
       this.props.navigation.navigate('deck')
     })
  }

  render() {
    if(!this.state.mapLoaded){
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      )
    }


    return (
      <View style={{ flex: 1 }}>
        <MapView
           region={ this.state.region }
           style= {{ flex : 1 }}
           onRegionChangeComplete={this.onRegionChangeComplete}/>
           <View>
              <Button 
               large
               title="Procurar nesta área"
               buttonStyle={{ backgroundColor: "#009688"}}
               icon={{ name: 'search'}}
               containerStyle={styles.buttonContainer}
               onPress={this.onButtonPress}/>
           </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer : {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0
  }
})
 
export default connect(null, actions)(MapScreen);