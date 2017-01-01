import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import * as Animatable from 'react-native-animatable'

import LocationButton from './LocationButton'
const transitionProps = ['top']

export default class LocationButtonGroup extends Component {

  static defaultProps = {
    visible: true,
    locations: [],
    onPressLocation: () => {},
  }

  renderItem = (location, i) => {
    const {icon, title} = location
    const {onPressLocation} = this.props
    const addressString = `${location.title} ${location.subtitle}`

    return (
      <View
        style={styles.item}
        key={i}
      >
        <LocationButton
          icon={icon}
          onPressLocation={onPressLocation.bind(this, addressString)}
          openSearch={this.props.openSearch}

        />
        <View style={styles.itemSpacer} />
        <Text style={styles.itemText}>
          {title}
        </Text>
      </View>
    )
  }

  render() {
    const { visible, locations } = this.props
    const {height: windowHeight, width: windowWidth} = Dimensions.get('window')

    const containerStyle = {
      top: visible ? windowHeight - 160 : windowHeight + 30,
    }

    const imageStyle = {
      width: windowWidth,
    }

    return (
      <Animatable.View
        style={[styles.container, containerStyle]}
        easing={'ease-in-out'}
        duration={300}
        transition={transitionProps}
      >
        <Image
          style={[styles.image, imageStyle]}
          source={require('../images/bottom-gradient-overlay.png')}
        />
      {locations.map((location, i) => this.renderItem(location, i))}
      </Animatable.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 30,
    right: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  image: {
    position: 'absolute',
    left: -30,
    right: -30,
    top: -20,
    width: 100,
    height: 180,
    resizeMode: 'stretch',
  },
  item: {
    alignItems: 'center',
  },
  itemSpacer: {
    height: 19,
  },
  itemText: {
    backgroundColor: 'transparent',
    maxWidth: 74,
    textAlign: 'center',
  },
})
