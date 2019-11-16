import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

import styles from './Styles/TaskListItemStyle'

export default class TaskListItem extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
