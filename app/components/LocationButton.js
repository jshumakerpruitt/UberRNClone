import React, { Component, PropTypes } from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'

import AssetMap from '../config/AssetMap'

export default class LocationButton extends Component {
  render() {
    const { icon } = this.props
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
                this.props.openSearch()
                this.props.onPressLocation()
                }}
      >
        <Image
          style={styles.image}
          source={AssetMap[icon]}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    shadowOpacity: 0.12,
  },
  image: {
    width: 21,
    height: 21,
  }
})
