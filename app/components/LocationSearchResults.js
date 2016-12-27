import React, { Component, PropTypes } from 'react'
import { StyleSheet, Dimensions, View } from 'react-native'
import * as Animatable from 'react-native-animatable'

export default class LocationSearchResults extends Component {
  componentDidMount() {
  //  this.refs.locationList.slideInUp(800)
  }

  render() {
    const {children, visible} = this.props
    return (
      <Animatable.View
        ref='locationList'
      >
        {children}
      </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  searchResults: {
  },
})
