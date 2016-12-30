import React, { Component, PropTypes } from 'react'
import { StyleSheet, Dimensions, View } from 'react-native'
import * as Animatable from 'react-native-animatable'

export default class LocationSearchResults extends Component {
  componentWillReceiveProps(newProps) {
    if(newProps.visible && !this.props.visible) {
      this.refs.locationList.slideInUp(800)
    }
  }
  render() {
    const {children, visible} = this.props

    const {width: windowWidth, height: windowHeight} = Dimensions.get('window')

    const style = {
      top: visible ? 122 : windowHeight,
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
    backgroundColor: 'white',
  },
})
