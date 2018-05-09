import React, { Component } from "react"
import { View, Text, TextInput, AsyncStorage } from "react-native"
import Toast, { DURATION } from "react-native-easy-toast"
import NavigationBar from "../component/navigationBar/NavigationBar.js"

export default class FetchTest extends Component {
  constructor () {
    super()
    this.state = {
      text: ""
    }
    this.handleSetText = this.handleSetText.bind(this)
    this.handleRemoveText = this.handleRemoveText.bind(this)
    this.handleGetText = this.handleGetText.bind(this)
  }
  handleChangeText (value) {
    this.setState({
      text: value
    })
  }
  handleSetText () {
    AsyncStorage.setItem("text", this.state.text, err => {
      if (!err) {
        this.toast.show("保存成功", DURATION.LENGTH_LONG)
      } else {
        this.toast.show("保存失败", DURATION.LENGTH_LONG)
      }
    })
  }
  handleRemoveText () {
    AsyncStorage.removeItem("text", err => {
      if (!err) {
        this.toast.show("移除成功")
      } else {
        this.toast.show("移除失败")
      }
    })
  }
  handleGetText () {
    AsyncStorage.getItem("text", (err, result) => {
      if (!err) {
        this.toast.show("取出内容为：" + result)
      } else {
        this.toast.show("取出失败 ")
      }
    })
  }
  render () {
    return (
      <View>
        <NavigationBar
          title="AsyncStorage"
          statusBar={{
            backgroundColor: "#827F82"
          }}
          style={{
            backgroundColor: "#827F82"
          }}
        />
        <TextInput  
          onChangeText={ value => this.handleChangeText(value) }
          value={ this.state.text }
        />
        <Text
          onPress={ this.handleSetText }
        >保存</Text>
        <Text
          onPress={ this.handleRemoveText }
        >移除</Text>
        <Text
          onPress={ this.handleGetText }
        >取出</Text>
        <Toast ref={ toast => this.toast = toast } />
      </View>
    )
  }
}