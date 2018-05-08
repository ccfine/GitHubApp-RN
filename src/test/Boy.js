import React, { Component } from "react"
import { StyleSheet, View, Text } from "react-native"
import Girl from "./Girl.js"
import NavigationBar from "./NavigationBar.js"
 
export default class Boy extends Component {
  constructor () {
    super()
    this.state = {
      word: ""
    }
  }
  render () {
    return (
      <View>
        <NavigationBar
          title="boy"
          statusBar={{
            backgroundColor: "red"
          }}
          style={{
            backgroundColor: "red"
          }}
        />
        <Text>我是男孩</Text>
        <Text
          onPress={ () => {
            this.props.navigator.push({
              component: Girl,
              params: {
                word: "玫瑰",
                callBack: word => {
                  this.setState({
                    word: word
                  })
                }
              }
            })
          } }
        >送出玫瑰</Text>
        <Text>{ this.state.word }</Text>
      </View>
    )
  }
}