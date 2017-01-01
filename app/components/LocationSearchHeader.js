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
  constructor(props) {
    super(props)
    this.move = this.move.bind(this)
  }

  move() {
    this.props.openSearch()
    this.refs.inner.transitionTo({
      height: 112,
    })
    this.refs.squareTop.transitionTo({
      opacity: 1,
    })

    this.refs.vertLine.transitionTo({
      opacity: 1,
    })
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

  moveBack() {
    this.refs.inner.transitionTo({
      height: 60,
    })
    this.refs.squareTop.transitionTo({
      opacity: 0,
    })

    this.refs.vertLine.transitionTo({
      opacity: 0,
    })
    this.refs.container.transitionTo({
      height: 60,
      top: 80,
      left: 20,
      right: 20,
    })

    this.refs.source.transitionTo({
      backgroundColor: '#f7f7f7',
      opacity: 0,
    })

    this.refs.dest.transitionTo({
      backgroundColor: '#FFF',
    })
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.searchIsOpen && this.props.searchIsOpen) {
      this.moveBack()
    } else if(nextProps.searchIsOpen && !this.props.searchIsOpen) {
      this.move()
    }
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
            ref='inner'
          >

            <Animatable.View
              style={styles.iconGroup}
              ref='iconGroup'
            >
              <Animatable.View style={styles.squareTop}
                ref='squareTop'
              />
              <Animatable.View style={styles.vertLine}
                ref='vertLine'
              />
              <View style={styles.squareBottom} />
            </Animatable.View>

            <Animatable.View
              style={styles.inputGroup}
              ref='inputGroup'
            >
              <Animatable.View
                style={styles.source}
                ref='source'
              >
                <TextInput
                  style={styles.input}
                  onChangeText={(source) => this.props.setSource(source)}
                  value={this.props.source}
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
                  onChangeText={(destination) => this.props.setDestination(destination)}
                  onSubmitEditing={this.handleSubmit}
                  value={this.props.destination}
                  onFocus={this.move}
                  clearTextOnFocus={true}
                />
              </Animatable.View>
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
    paddingRight: 10,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },

  inner: {
    position: 'relative',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    opacity: 1,
    zIndex: 1,
  },
  source: {
    position: 'absolute',
    borderRadius: 5,
    opacity: 0,
    height: 30,
    bottom: 50,
    right: 0,
    left: 0,
  },
  dest: {
    zIndex: 2,
    opacity: 1,
    paddingLeft: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 30,
    borderRadius: 5,
    position: 'absolute',
    bottom: 15,
    right: 0,
    left: 0,
  },
  input: {
    height: 30,
  },
  iconGroup: {
    zIndex: 2,
    flexDirection: 'column',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputGroup: {
    flex: 18,
    zIndex: 2,
    flexDirection: 'column',
  },
  squareTop: {
    position: 'absolute',
    left: 24,
    bottom: 62,
    height: 5,
    width: 5,
    backgroundColor: '#d7d7d7',
    opacity: 0,
    borderRadius: 3.5,
  },
  vertLine: {
    opacity: 0,
    position: 'absolute',
    height: 20,
    backgroundColor: '#d7d7d7',
    width: 1.5,
    left: 25.5,
    bottom: 37,
  },
  squareBottom: {
    position: 'absolute',
    left: 24,
    bottom: 27,
    height: 5,
    width: 5,
    backgroundColor: 'black',
  },
})
