import React, { Component } from "react"
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from "react-native"
import NavigationBar from "../navigationBar/NavigationBar.js"
import CheckBox from "react-native-check-box"
import BackButton from "../backButton/BackButton.js"
import Language, { FLAG_LANGUAGE } from "../../util/language.js"
import Array from "../../util/array.js"

export default class FetchTest extends Component {
  constructor () {
    super()
    this.language = new Language(FLAG_LANGUAGE.flag_key)
    this.state = {
      dataArray: []
    }
    this.handleSave = this.handleSave.bind(this)
  }
  componentDidMount () {
    this._loadData()
  }
  _loadData () {
    this.language.fetch()
      .then(result => {
        this.setState({
          dataArray: result
        })
      })
  }
  handleSave () {
    this.props.navigator.pop()
  }
  handleClick (data) {
    data.checked = !data.checked
    
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
  renderView () {
    if (!this.state.dataArray || this.state.dataArray.length === 0 ) {
      return null
    }
    const len = this.state.dataArray.length
    const views = []
    for (let i = 0, l = len- 2; i < l; i += 2) {
      views.push(
        <View key={ i }>
          <View style={ styles.item }>
            { this.renderCheckBox(this.state.dataArray[i]) }
            { this.renderCheckBox(this.state.dataArray[i+1]) }
          </View>
          <View style={ styles.line } />
        </View>
      )
    }
    views.push(
      <View key={ len-1 }>
        <View style={ styles.item }>
          { len % 2 === 0? this.renderCheckBox(this.state.dataArray[len-2]): null }
          { this.renderCheckBox(this.state.dataArray[len-1]) }
        </View>
        <View style={ styles.line } />
      </View>
    )
    return views
  }
  renderCheckBox (data) {
    return (
      <CheckBox 
        style={ styles.checkBox }
        onClick={ () => this.handleClick(data) }  
        leftText={ data.name }
        checkedImage={ <Image 
          style={ styles.image }
          source={ require("./image/ic_check_box.png") } 
        /> }
        unCheckedImage={ <Image 
          style={ styles.image }
          source={ require("./image/ic_check_box_outline_blank.png") } 
        /> }
      />
    )
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
        <ScrollView>{ this.renderView() }</ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  save: {
    color: "#fff",
    margin: 5
  },
  item: {
    flexDirection: "row",
  },
  checkBox: {
    flex: 1,
    padding: 10
  },
  image: {
    tintColor: "#6495ed"
  },
  line: {
    height: 0.5,
    backgroundColor: "darkgray"
  }
})