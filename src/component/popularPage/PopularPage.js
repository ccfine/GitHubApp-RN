import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
import NavigationBar from "../navigationBar/NavigationBar.js"
import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view"
import PopularTab from "../popularTab/PopularTab.js"
import Language, { FLAG_LANGUAGE } from "../../util/language.js"
import Array from "../../util/array.js"

export default class WelcomePage extends Component {
  constructor () {
    super()
    this.language = new Language(FLAG_LANGUAGE.flag_key)
    this.state = {
      languages: []
    }
  }
  componentDidMount () {
    this._loadData()
  }
  _loadData () {
    this.language.fetch()
      .then(result => {
        this.setState({
          languages: result
        })
      })
  }
  render () {
    return (
      <View style={ styles.container }>
        <NavigationBar
          title="最热"
          statusBar={{
            backgroundColor: "#2695ED"
          }}
          style={{
            backgroundColor: "#2695ED"
          }}
        />
        { this.state.languages.length > 0? 
          (<ScrollableTabView
            tabBarBackgroundColor="#2695ED"
            tabBarInactiveTextColor="mintcream"
            tabBarActiveTextColor="#fff"
            tabBarUnderlineStyle={{ backgroundColor: "#e7e7e7", height: 2 }}
            renderTabBar={ () => <ScrollableTabBar /> }
          >
            { this.state.languages.map( item => 
              item.checked? <PopularTab tabLabel={ item.name } key={ item.name } />: null
            ) }        
          </ScrollableTabView>): null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})