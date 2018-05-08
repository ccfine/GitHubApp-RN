import React, { Component } from "react"
import { View, Text, ListView } from "react-native"
import PopularItem from "../popularItem/PopularItem.js"
import http from "../../util/http.js"

export default class PopularTab extends Component {
  constructor () {
    super()
    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    }
  }
  componentDidMount () {
    http.get("https://api.github.com/search/repositories?q=" + this.props.tabLabel + "&sort=stars")
      .then(result => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(result.items)
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
      <View>
        <ListView 
          dataSource={ this.state.dataSource }
          renderRow={ rowData => <PopularItem data={ rowData } /> }
        />
      </View>
    )
  }
}