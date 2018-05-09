import React, { Component } from "react"
import { View } from "react-native"
import NavigationBar from "../navigationBar/NavigationBar.js"
import HomePage from "../homePage/HomePage.js"

export default class WelcomePage extends Component {
  componentDidMount () {
    this.timer = setTimeout(() => {
      this.props.navigator.resetTo({
        component: HomePage
      })
    }, 1000)
  }
  componentWillUnmount () {
    clearTimeout(this.timer)
  }
  render () {
    return (
      <View>
        <NavigationBar
          title="welcome"
          statusBar={{
            backgroundColor: "#827F82"
          }}
          style={{
            backgroundColor: "#827F82"
          }}
        />
      </View>
    )
  }
}