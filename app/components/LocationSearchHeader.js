import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native'
import * as Animatable from 'react-native-animatable'

export default class LocationSearchHeader extends Component {
  constructor() {
    super()
    this.state = {
      dest: 'Where to?',
      source: 'Office',
    }
    this.move = this.move.bind(this)
  }

  move() {
    this.props.openSearch()
    this.refs.input.transitionTo({
    }, 800)

    this.refs.container.transitionTo({
      top: 0,
      height: 114,
    })

    this.refs.source.transitionTo({
      backgroundColor: '#f7f7f7',
      opacity: 1,
    })

    this.refs.dest.transitionTo({
      backgroundColor: '#d7d7d7',
    })
  }

  render() {
    return (
      <Animatable.View
        style={styles.container}
        ref='container'
      >
        <TouchableWithoutFeedback onPress={this.move} >
          <Animatable.View
            style={styles.inner}
            ref='input'
          >

            <Animatable.View
              style={styles.source}
              ref='source'
            >
              <TextInput
                style={styles.input}
                onChangeText={(source) => this.setState({source,})}
                value={this.state.source}
                onFocus={this.move}
                clearTextOnFocus={true}
              />
            </Animatable.View>

            <Animatable.View
              style={styles.dest}
              ref='dest'
            >
              <TextInput
                style={styles.input}
                onChangeText={(dest) => this.setState({dest,})}
                onSubmitEditing={this.handleSubmit}
                value={this.state.dest}
                onFocus={this.move}
                clearTextOnFocus={true}
              />
            </Animatable.View>

          </Animatable.View>
        </TouchableWithoutFeedback>
      </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    height: 60,
    top: 62,
    paddingBottom: 4,
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'flex-end',
  },
  inner: {
    justifyContent: 'space-between',
    opacity: 1,
    zIndex: 1,
  },
  source: {
    backgroundColor: 'white',
    height: 30,
    position: 'relative',
    borderRadius: 5,
    opacity: 0,
  },
  dest: {
    zIndex: 2,
    opacity: 1,
    paddingLeft: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 30,
    position: 'relative',
    borderRadius: 5,
    marginTop: 5,
  },
  input: {
    height: 30,
  }
})
