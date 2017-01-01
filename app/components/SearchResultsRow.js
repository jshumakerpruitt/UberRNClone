import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import AssetMap from '../config/AssetMap'

export default class SearchResultsRow extends Component {

  render() {
    const {icon, title, subtitle} = this.props

    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={AssetMap[icon]}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.subtitle}>
            {subtitle}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  iconContainer: {
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  icon: {
    height: 15,
    width: 15,
  },
  textContainer: {
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
  },
  title: {
    fontSize: 15,
    color: 'black',
  },
  subtitle: {
    fontSize: 13,
    color: '#A4A4AC',
  },
})
