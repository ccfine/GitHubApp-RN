import React, { Component } from "react"
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native"

export default class PopularItem extends Component {
  render () {
    return (
      <TouchableOpacity>
        <View style={ styles.container }>
          <Text style={ styles.title }>{ this.props.data.full_name }</Text>
          <Text style={ styles.description }>{ this.props.data.description }</Text>
          <View style={ styles.containerSmall }>
            <View style={ styles.author }>
              <Text>Author:</Text>
              <Image source={{ uri: this.props.data.owner.avatar_url }} style={ styles.image } />
            </View>
            <Text>Stars:{ this.props.data.stargazers_count }</Text>
            <Image source={ require("../../image/ic_star.png") } style={ styles.image } />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  title: {
    fontSize: 16,
    marginBottom: 2,
    color: "#212121"
  },
  description: {
    fontSize: 14,
    marginBottom: 2,
    color: "#757575"
  },
  containerSmall: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  author: {
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 22,
    height: 22
  }
})