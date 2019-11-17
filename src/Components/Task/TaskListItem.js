import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { AntDesign } from '@expo/vector-icons'
import { withNavigation } from 'react-navigation'

import styles from './Styles/TaskListItemStyle'

 class TaskListItem extends Component {
  static proopTypes = {
    task: PropTypes.object.isRequired,
  }

  goToDetail() {
    this.props.navigation.navigate('DetailScreen', { task: this.props.task })
  }

  render() {
    const { task } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.checkContainer}>
          <TouchableOpacity style={styles.checkButton}>
            <AntDesign name="checkcircleo" style={styles.checkIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{task.name}</Text>
        </View>
        <View style={styles.detailContainer}>
          <TouchableOpacity style={styles.detailBtn} onPress={() => this.goToDetail()}>
            <AntDesign name="right" style={styles.detailIcon} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default withNavigation(TaskListItem)
