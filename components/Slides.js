import React, { Component } from 'react'
import { Text, ScrollView , View, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'


const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Slides extends Component {

  renderLastSlide(index){
    if(index === this.props.data.length -1){
      return (
        
          <Button 
            buttonStyle={styles.buttonStyle}          
            containerStyle={styles.containerStyle}
            title="Onwards!"
            raised          
            onPress={this.props.onComplete}            
          />
        
      )
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View key={slide.text} 
              style={[styles.slideStyle, {backgroundColor: slide.color}]}>
          <Text style={styles.textStyle}>{slide.text}</Text>
          {this.renderLastSlide(index)}
        </View>
      )
    })
  }

  render() {
    return (
      <ScrollView 
        horizontal
        pagingEnabled
        style={{ flex: 1 }}>
        { this.renderSlides() }
      </ScrollView>
    )
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  textStyle:{
    fontSize: 30,
    color: 'white',
    textAlign: 'center'
  },
  buttonStyle:{    
    backgroundColor: "blue" 
  },
  containerStyle:{
    marginTop: 15    
  }
}

