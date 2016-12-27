import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import AssetMap from '../config/AssetMap'

export default class SearchResultsRow extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>row</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
  }
})
