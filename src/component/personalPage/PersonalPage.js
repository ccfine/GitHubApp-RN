import React, { Component } from "react"
import { View } from "react-native"
import NavigationBar from "../navigationBar/NavigationBar.js"

export default class PersonalPage extends Component {
  render () {
    return (
      <View>
        <NavigationBar
          title="我的"
          statusBar={{
            backgroundColor: "#2695ED"
          }}
          style={{
            backgroundColor: "#2695ED"
          }}
        />
      </View>
    )
  }
}