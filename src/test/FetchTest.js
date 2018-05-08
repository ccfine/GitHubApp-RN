import React, { Component } from "react"
import { StyleSheet, View, Text } from "react-native"
import NavigationBar from "./NavigationBar.js"
import HttpUtils from "./HttpUtils.js"

export default class FetchTest extends Component {
  constructor () {
    super()
    this.state = {
      result: ""
    }
  }
  onLoad (url) {
    HttpUtils.get(url)
      .then(result => {
        this.setState({
          result: JSON.stringify(result)
        })
      })
      .catch(err => {
        this.setState({
          result: JSON.stringify(err)
        })
      })
  }
  onSubmit (url, data) {
    HttpUtils.post(url ,data)
      .then(result => {
        this.setState({
          result: JSON.stringify(result)
        })
      })
      .catch(err => {
        this.setState({
          result: JSON.stringify(err)
        })
      })
  }
  render () {
    return (
      <View style={ styles.container }>
        <NavigationBar
          title="fetch"
          statusBar={{
            backgroundColor: "#827F82"
          }}
          style={{
            backgroundColor: "#827F82"
          }}
        />
        <Text
          onPress={ () => this.onLoad("http://rap.taobao.org/mockjsdata/11793/test") }
        >获取数据</Text>
        <Text
          onPress={ () => this.onSubmit("http://rap.taobao.org/mockjsdata/11793/submit", 
          { username: "小明", password: "123456" }) }
        >提交数据</Text>
        <Text>返回结果：{ this.state.result }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  }
})