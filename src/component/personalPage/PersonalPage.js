import React, { Component } from "react"
import { View, Text } from "react-native"
import NavigationBar from "../navigationBar/NavigationBar.js"
import CustomKeyPage from "../customKeyPage/CustomKeyPage.js"

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
        <Text
          onPress={ () => {
            this.props.navigator.push({
              component: CustomKeyPage,
              params: { ...this.props }
            })
          } }
        >自定义标签</Text>
      </View>
    )
  }
}