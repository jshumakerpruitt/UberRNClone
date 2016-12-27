import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { connect } from 'react-redux'

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

    return (
      <View>
        <LocationSearchHeader openSearch={this.props.openSearch} />
        <LocationSearchResults visible={this.props.searchIsOpen}>
          <SearchResultsList recentLocations={recentLocations}/>
        </LocationSearchResults>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

export default connect(mapStateToProps, globalActionCreators)(Main)
