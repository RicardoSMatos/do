import React, { Component } from 'react'
import { FlatList, View  } from 'react-native'
import PropTypes from 'prop-types'

import TaskListItem from './TaskListItem'
import styles from './Styles/TaskListStyle'

export class TaskList extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
  }

  renderItem = ({ item }) => {
    return (
      <TaskListItem task={item} />
    )
  }

  render() {
    const { tasks } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

export default TaskList;
