import React, { Component } from "react"
import PropTypes from "prop-types"
import { Platform, StyleSheet, View, Text, StatusBar } from "react-native"

const NAV_BAR_HEIGHT_ANDROID = 50
const NAV_BAR_HEIGHT_IOS = 44
const STATUS_BAR_HEIGHT_IOS= 20

export default class NavigationBar extends Component {
  static propTypes = {
    style: View.propTypes.style,
    leftButton: PropTypes.element,
    title: PropTypes.string,
    rightButton: PropTypes.element,
    hide: PropTypes.bool,
    statusBar: PropTypes.shape({
      backgroundColor: PropTypes.string,
      barStyle: PropTypes.oneOf(["default", "line-content", "dark-content"]),
      hidden: PropTypes.bool
    })
  }
  static defaultProps = {
    statusBar: {
      barStyle: "line-content",
      hidden: false
    }
  }
  constructor () {
    super()
    this.state = {
      title: "",
      hide: false
    }
  }
  render () {
    return (
      <View>
        <View style={ styles.statusBar }>
          <StatusBar { ...this.props.statusBar } />
        </View>
        <View style={[ styles.navBar, this.props.style ]}>
          { this.props.leftButton }
          <View style={ styles.titleContainer }>
            <Text style={ styles.title }>{ this.props.title }</Text>
          </View>
          { this.props.rightButton }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({ 
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: Platform.OS === "android"? NAV_BAR_HEIGHT_ANDROID: NAV_BAR_HEIGHT_IOS
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  title: {
    fontSize: 20,
    color: "#fff"
  },
  statusBar: {
    height: Platform.OS === "android"? 0: STATUS_BAR_HEIGHT_IOS
  }
})