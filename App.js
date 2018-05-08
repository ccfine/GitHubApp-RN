import React, { Component } from "react"
import { View } from "react-native"
import { Navigator } from "react-native-deprecated-custom-components"
import WelcomePage from "./src/component/welcomePage/WelcomePage.js"

export default class App extends Component {
  render () {
    return (
      <View>
        <Navigator
          initialRoute={{
            component: WelcomePage
          }}
          renderScene={ (route, navigator) => 
            <route.component navigator={ navigator } { ...route.params } />
          }
        />
      </View>
    )
  }
}