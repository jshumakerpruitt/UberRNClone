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
      height: 122,
      top: 0,
      left: 0,
      right: 0,
    })

    this.refs.source.transitionTo({
      backgroundColor: '#f7f7f7',
      opacity: 1,
    })

    this.refs.dest.transitionTo({
      backgroundColor: '#d7d7d7',
    })
  }

  componentDidMount() {
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
    position: 'absolute',
    height: 60,
    top: 80,
    left: 20,
    right: 20,
    zIndex: 1,
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },

  inner: {
    position: 'relative',
    height: 60,
    justifyContent: 'space-between',
    opacity: 1,
    zIndex: 1,
  },
  source: {
    height: 30,
    borderRadius: 5,
    opacity: 0,
    bottom: 30,
  },
  dest: {
    bottom: 15,
    zIndex: 2,
    opacity: 1,
    paddingLeft: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 30,
    borderRadius: 5,
  },
  input: {
    height: 30,
  }
})
