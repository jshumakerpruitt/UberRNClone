import React, { Component, PropTypes } from 'react'
import { StyleSheet, Dimensions, View } from 'react-native'
import * as Animatable from 'react-native-animatable'

export default class LocationSearchResults extends Component {
  componentDidMount() {
    this.refs.locationList.slideInUp(800)
  }

  render() {
    console.log(this.props)
    const {children, visible} = this.props

    const {width: windowWidth, height: windowHeight} = Dimensions.get('window')

    const style = {
      top: visible ? 128 : windowHeight,
      height: windowHeight,
      width: windowWidth,
    }

    return (
      <Animatable.View
        style={[styles.container, style]}
        ref='locationList'
      >
        {children}
      </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
})
