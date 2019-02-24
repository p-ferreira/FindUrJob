import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import Swipe from '../components/Swipe'
import { Card } from 'react-native-elements'
import { MapView } from 'expo'

class DeckScreen extends Component {
  renderCard(job){

    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      longitudeDelta: 0.02,
      latitudeDelta: 0.045
    };

    return (
    <Card title={job.jobtitle}>
    <View style={{ height: 300 }}>    
        <MapView scrollEnabled={false}
                style={{ flex: 1}} 
                cacheEnabled={Platform.OS === 'android' ? true : false}
                initialRegion={initialRegion}>          
        </MapView>
      </View>
      <View style={styles.detailWrapper}>
        <Text>{ job.company }</Text>
        <Text>{ job.formattedRelativeTime }</Text>
      </View>
      <Text>
        {job.snippet.replace(/<b>/g, '').replace(/<\/b>/g, '')}
      </Text>
    </Card>
    )
  }

  renderNoMoreCards(){
    return (
      <Card title="No more jobs"></Card>
    )
  }

  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <Swipe 
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          keyProp='jobkey'/>
      </View>
    )
  }
}


function mapStateToProps({ jobs }){
  return { jobs: jobs.results}
}

export default connect(mapStateToProps)(DeckScreen)



const styles = StyleSheet.create({
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
})
