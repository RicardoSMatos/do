import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { AntDesign } from '@expo/vector-icons'

import styles from './Styles/TaskListItemStyle'

export default class TaskListItem extends Component {
  static proopTypes = {
    task: PropTypes.object.isRequired,
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
      </View>
    )
  }
}
