import React, { Component } from "react"
import { StyleSheet, View, Text } from "react-native"

export default class Girl extends Component {
  render () {
    return (
      <View>
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
    flex: 1,
    justifyContent: "center",
    backgroundColor: "yellow"
  }
})