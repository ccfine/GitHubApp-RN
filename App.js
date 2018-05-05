import React, { Component } from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import TabNavigator from "react-native-tab-navigator"

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      selectedTab: "tb_popular"
    }
  }
  render () {
    return (
      <View style={ styles.container }>
        <TabNavigator>
          <TabNavigator.Item
            selected={ this.state.selectedTab === "tb_popular" }
            title="最热"
            selectedTitleStyle={{ color: "blue" }}
            renderIcon={ () => <Image source={ require("./src/image/ic_polular.png") } style={ styles.image } /> }
            renderSelectedIcon={ () => <Image source={ require("./src/image/ic_polular.png") } style={[ styles.image, { tintColor: "blue" } ]} /> }
            onPress={ () => this.setState({ selectedTab: "tb_popular" }) }
          >
            <View>
              <Text>最热</Text>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={ this.state.selectedTab === "tb_trending" }
            title="趋势"
            selectedTitleStyle={{ color: "blue" }}
            renderIcon={ () => <Image source={ require("./src/image/ic_trending.png") } style={ styles.image } /> }
            renderSelectedIcon={ () => <Image source={ require("./src/image/ic_trending.png") } style={[ styles.image, { tintColor: "blue" }]} /> }
            onPress={ () => this.setState({ selectedTab: "tb_trending" }) }
            >
            <View>
              <Text>趋势</Text>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={ this.state.selectedTab === "tb_favorite" }
            title="收藏"
            selectedTitleStyle={{ color: "blue" }}
            renderIcon={ () => <Image source={ require("./src/image/ic_polular.png") } style={ styles.image } /> }
            renderSelectedIcon={ () => <Image source={ require("./src/image/ic_polular.png") } style={[ styles.image, { tintColor: "blue" } ]} /> }
            onPress={ () => this.setState({ selectedTab: "tb_favorite" }) }
          >
            <View>
              <Text>收藏</Text>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={ this.state.selectedTab === "home" }
            title="我的"
            selectedTitleStyle={{ color: "blue" }}
            renderIcon={ () => <Image source={ require("./src/image/ic_trending.png") } style={ styles.image } /> }
            renderSelectedIcon={ () => <Image source={ require("./src/image/ic_trending.png") } style={[ styles.image, { tintColor: "blue" } ]} /> }
            onPress={ () => this.setState({ selectedTab: "home" }) }
          >
            <View>
              <Text>我的</Text>
            </View>
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