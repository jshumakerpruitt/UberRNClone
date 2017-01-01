import React, { Component, PropTypes } from 'react'
import { Dimensions, StyleSheet, View, Image } from 'react-native'
import { connect } from 'react-redux'
import MapView from 'react-native-maps';

import { globalActionCreators } from '../redux/global'

import {
  LocationButtonGroup,
  LocationSearchHeader,
  LocationSearchResults,
  SearchResultsList,
  NavigationIcon,
} from '../components'

const mapStateToProps = (state) => ({
  recentLocations: state.global.recentLocations,
  shortcutLocations: state.global.recentLocations.slice(0, 3),
  searchIsOpen: state.global.searchIsOpen,
})

class Main extends Component {

  render() {
    const {recentLocations, shortcutLocations} = this.props

    const {width: windowWidth, height: windowHeight} = Dimensions.get('window')
    const style = {
      height: windowHeight,
      width: windowWidth,
      zIndex: 0,
    }

    return (
      <View
        style={styles.main}
      >
        <LocationSearchHeader
          openSearch={this.props.openSearch}
        />
        <MapView
          style={style}
        />
        <LocationSearchResults visible={this.props.searchIsOpen}>
          <SearchResultsList recentLocations={recentLocations}/>
        </LocationSearchResults>
        <Image style={styles.controlButton} source={require('../images/icon-hamburger.png')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    top: 20,
  },
  controlButton: {
    position: 'absolute',
    height: 20,
    width: 20,
    top: 20,
    left: 20,
  }
})

export default connect(mapStateToProps, globalActionCreators)(Main)
