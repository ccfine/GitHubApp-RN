import React, { Component } from "react"
import  PropTypes from "prop-types"
import { StyleSheet, TouchableOpacity, Image } from "react-native"

export default class BackButton extends Component {
  static propTypes = {
    back: PropTypes.func
  }
  render () {
    return (
      <TouchableOpacity
        onPress={ this.props.back }
      >
        <Image style={ styles.image } source={ require("../../image/ic_arrow_back_white_36pt.png") } />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 22,
    height: 22,
    margin: 5
  }
})