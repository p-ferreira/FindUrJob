import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { clearLikedJobs } from '../actions'

class SettingsScreen extends Component {
  render() {
    return (
      <View>
        <Button
          title="Reset liked Jobs" 
          large
          icon={{ name: 'delete-forever' }}
          buttonStyle={{ backgroundColor: "#F44336"}}
          onPress={this.props.clearLikedJobs}/>
      </View>
    )
  }
}

export default connect(null, {clearLikedJobs})(SettingsScreen)