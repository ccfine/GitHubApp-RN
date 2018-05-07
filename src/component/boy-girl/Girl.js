import React, { Component } from "react"
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native"
import NavigationBar from "./NavigationBar.js"

export default class Girl extends Component {
  renderButton (image) {
    return (
      <TouchableOpacity
        onPress={ () => {
          this.props.navigator.pop()
        } }
      >
        <Image style={ styles.image } source={ image } />
      </TouchableOpacity>
    )
  }
  render () {
    return (
      <View style={ styles.container }>
        <NavigationBar
          leftButton={ this.renderButton(require("../../image/ic_arrow_back_white_36pt.png")) }
          title="girl"
          rightButton={ this.renderButton(require("../../image/ic_star.png")) }
          statusBar={{
            backgroundColor: "#ee6363"
          }}
          style={{
            backgroundColor: "#ee6363"
          }}
        />
        <Text>我是女孩</Text>
        <Text>{ this.props.word }</Text>
        <Text
          onPress={ () => {
            this.props.callBack("巧克力")
            this.props.navigator.pop()
          } }
        >回送巧克力</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  image: {
    width: 22,
    height: 22,
    margin: 5
  }
})