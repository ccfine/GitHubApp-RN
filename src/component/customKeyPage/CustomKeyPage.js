import React, { Component } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import NavigationBar from "../navigationBar/NavigationBar.js"
import BackButton from "../backButton/BackButton.js"

export default class FetchTest extends Component {
  constructor () {
    super()
    this.handleSave = this.handleSave.bind(this)
  }
  renderRightButton () {
    return (
      <TouchableOpacity
        onPress={ () => {
          this.handleSave()
        } }
      >
        <View>
          <Text style={ styles.save }>保存</Text>
        </View>
      </TouchableOpacity>
    )
  }
  handleSave () {
    this.props.navigator.pop()
  }
  render () {
    return (
      <View>
        <NavigationBar
          leftButton={ <BackButton back={ this.handleSave } /> }
          title="Custom Key"
          rightButton={ this.renderRightButton() }
          statusBar={{
            backgroundColor: "#6E87E7"
          }}
          style={{
            backgroundColor: "#6E87E7"
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  save: {
    color: "#fff",
    margin: 5
  }
})