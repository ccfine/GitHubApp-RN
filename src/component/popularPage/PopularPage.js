import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
import NavigationBar from "../navigationBar/NavigationBar.js"
import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view"
import PopularTab from "../popularTab/PopularTab.js"

export default class WelcomePage extends Component {
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
        <ScrollableTabView
          tabBarBackgroundColor="#2695ED"
          tabBarInactiveTextColor="mintcream"
          tabBarActiveTextColor="#fff"
          tabBarUnderlineStyle={{ backgroundColor: "#e7e7e7", height: 2 }}
          renderTabBar={ () => <ScrollableTabBar /> }
        >
          <PopularTab tabLabel="ios" />
          <PopularTab tabLabel="android" />
          <PopularTab tabLabel="react" />
          <PopularTab tabLabel="react-native" />          
        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})