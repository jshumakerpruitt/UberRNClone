import React, { Component } from 'react'
import { ListView, View, Text, StyleSheet } from 'react-native'
import uuid from 'uuid/v4'

import SearchResultsRow from './SearchResultsRow'

    const rowHasChanged = (r1, r2) => r1 !== r2
const ds = new ListView.DataSource({ rowHasChanged, })

export default class SearchResultsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows(props.recentLocations)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: ds.cloneWithRows(nextProps.recentLocations)
    })
  }

  _renderRow(rowData) {
    return (
      <SearchResultsRow
        onPress={this.props.setSource}
        {...rowData }/>
    );
  }

  _renderSeparator() {
    return (
      <View
        style={styles.separator}
        key={uuid()}
      />
    )
  }

  render() {
    return (
      <ListView
        style={styles.container}
        renderRow={this._renderRow.bind(this)}
        renderSeparator={this._renderSeparator}
        dataSource={this.state.dataSource}
      >
      </ListView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  separator: {
    flex: 1,
    height: 2,
    backgroundColor: '#EDEDED',
  }
})
