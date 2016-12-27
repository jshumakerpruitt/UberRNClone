import React, { Component } from 'react'
import { ListView, View, Text, StyleSheet } from 'react-native'
import uuid from 'uuid/v4'

import SearchResultsRow from './SearchResultsRow'

export default class SearchResultsList extends Component {
  constructor(props) {
    super(props)
    const rowHasChanged = (r1, r2) => r1 !== r2

    const ds = new ListView.DataSource({ rowHasChanged, })
    this.state = {
      dataSource: ds.cloneWithRows([1,2,3,4,6,7,8])
    }
  }

  _renderRow(rowData) {
    return (
      <SearchResultsRow rowData={rowData} />
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
        renderRow={this._renderRow}
        renderSeparator={this._renderSeparator}
        dataSource={this.state.dataSource}
      >
      </ListView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: 122,
  },
  separator: {
    flex: 1,
    height: 2,
    backgroundColor: '#EDEDED',
  }
})
