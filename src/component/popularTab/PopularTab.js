import React, { Component } from "react"
import { StyleSheet, View, ListView, RefreshControl } from "react-native"
import PopularItem from "../popularItem/PopularItem.js"
import http from "../../util/http.js"

export default class PopularTab extends Component {
  constructor () {
    super()
    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
      isLoading: false
    }
    this.handleLoad = this.handleLoad.bind(this)
  }
  componentDidMount () {
    this._loadData()
  }
  _loadData () {
    this.setState({
      isLoading: true
    })
    http.get("https://api.github.com/search/repositories?q=" + this.props.tabLabel + "&sort=stars")
      .then(result => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(result.items),
          isLoading: false
        })
      })
      .catch(err => {
        this.setState({
          result: JSON.stringify(err)
        })
      }) 
  }
  handleLoad () {
    this._loadData()
  }
  render () {
    return (
      <View style={ styles.container }>
        <ListView 
          dataSource={ this.state.dataSource }
          renderRow={ rowData => <PopularItem data={ rowData } /> }
          refreshControl={ <RefreshControl 
            refreshing={ this.state.isLoading }
            onRefresh={ this.handleLoad }
            tintColor="#2196f3"
            title="Loading"
            titleColor="#2196f3"
          /> }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})