import React, { Component } from "react"
import { StyleSheet, View, Text, ListView, TouchableOpacity, RefreshControl } from "react-native"
import Toast, { DURATION } from "react-native-easy-toast"
import NavigationBar from "./NavigationBar.js"

const data = [
  {
    email: "qq",
    name: "腾讯"
  },
  {
    email: "163",
    name: "网易"
  },
  {
    email: "microsoft",
    name: "微软"
  }
]

export default class ListViewTest extends Component {
  constructor () {
    super()
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds.cloneWithRows(data),
      isLoading: true
    }
    this._onLoad()
  }
  renderRow (item) {
    return (
      <View>
        <TouchableOpacity
          onPress={ () => {
            this.toast.show("你单击了" + item.email, DURATION.LENGTH_LONG)
          } }
        >
          <Text>{ item.email }</Text>
          <Text>{ item.name }</Text>
        </TouchableOpacity>
      </View>
    )
  }
  renderSeparator (sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View key={ rowID } style={ styles.line } />
    )
  }
  renderFooter () {
    return (
      <View>
        <Text>已经见底了~~</Text>
      </View>
    )
  }
  _onLoad () {
   setTimeout(() => {
     this.setState({
       isLoading: false
     })
   }, 2000)
  }
  render () {
    return (
      <View style={ styles.container }>
        <NavigationBar
          title="ListView"
          statusBar={{
            backgroundColor: "#827F82"
          }}
          style={{
            backgroundColor: "#827F82"
          }}
        />
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={ rowData => this.renderRow(rowData) }
          renderSeparator={ (sectionID, rowID, adjacentRowHighlighted) => this.renderSeparator(sectionID, rowID, adjacentRowHighlighted) }
          renderFooter={ () => this.renderFooter() }
          refreshControl={ <RefreshControl 
            refreshing={ this.state.isLoading }
            onRefresh={ () => this._onLoad() }
          /> }
        />
        <Toast ref={ toast => this.toast = toast } />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  line: {
    height: 1,
    backgroundColor: "#000"
  }
})