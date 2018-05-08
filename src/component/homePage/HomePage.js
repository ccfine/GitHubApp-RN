import React, { Component } from "react"
import { StyleSheet, View, Image } from "react-native"
import TabNavigator from "react-native-tab-navigator"
import PopularPage from "../popularPage/PopularPage.js"
import TrendPage from "../trendPage/TrendPage.js"
import FavoritePage from "../favoritePage/FavoritePage.js"
import PersonalPage from "../personalPage/PersonalPage.js"

export default class HomePage extends Component {
  constructor () {
    super()
    this.state = {
      selectedTab: "popular"
    }
  }
  render () {
    return (
      <View style={ styles.container }>
        <TabNavigator>
          <TabNavigator.Item
            selected={ this.state.selectedTab === "popular" }
            title="最热"
            selectedTitleStyle={{ color: "#2695ED" }}
            renderIcon={ () => <Image source={ require("../../image/ic_polular.png") } style={ styles.image } /> }
            renderSelectedIcon={ () => <Image source={ require("../../image/ic_polular.png") } style={[ styles.image, { tintColor: "#2695ED" } ]} /> }
            onPress={ () => this.setState({ selectedTab: "popular" }) }
          >
            <PopularPage />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={ this.state.selectedTab === "trend" }
            title="趋势"
            selectedTitleStyle={{ color: "#2695ED" }}
            renderIcon={ () => <Image source={ require("../../image/ic_trending.png") } style={ styles.image } /> }
            renderSelectedIcon={ () => <Image source={ require("../../image/ic_trending.png") } style={[ styles.image, { tintColor: "#2695ED" }]} /> }
            onPress={ () => this.setState({ selectedTab: "trend" }) }
            >
            <TrendPage />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={ this.state.selectedTab === "favorite" }
            title="收藏"
            selectedTitleStyle={{ color: "#2695ED" }}
            renderIcon={ () => <Image source={ require("../../image/ic_polular.png") } style={ styles.image } /> }
            renderSelectedIcon={ () => <Image source={ require("../../image/ic_polular.png") } style={[ styles.image, { tintColor: "#2695ED" } ]} /> }
            onPress={ () => this.setState({ selectedTab: "favorite" }) }
          >
            <FavoritePage />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={ this.state.selectedTab === "personal" }
            title="我的"
            selectedTitleStyle={{ color: "#2695ED" }}
            renderIcon={ () => <Image source={ require("../../image/ic_trending.png") } style={ styles.image } /> }
            renderSelectedIcon={ () => <Image source={ require("../../image/ic_trending.png") } style={[ styles.image, { tintColor: "#2695ED" } ]} /> }
            onPress={ () => this.setState({ selectedTab: "personal" }) }
          >
            <PersonalPage />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 22,
    height: 22
  }
})