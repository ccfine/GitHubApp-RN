import React, { Component } from "react"
import { View, Text } from "react-native"

export default class PopularItem extends Component {
  render () {
    return (
      <View>
        <Text>{ this.props.data.full_name }</Text>
        <Text>{ this.props.data.description }</Text>
        <Text>{ this.props.data.owner.avatar_url }</Text>
        <Text>{ this.props.data.stargazers_count }</Text>
      </View>
    )
  }
}