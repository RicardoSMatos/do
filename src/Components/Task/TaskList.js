import React, { Component } from 'react'
import { FlatList, View  } from 'react-native'
import PropTypes from 'prop-types'

import TaskListItem from './TaskListItem'
import styles from './Styles/TaskListStyle'
import { EmptyList } from '../../Components'

export class TaskList extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    navigation: PropTypes.object.isRequired,
  }

  renderItem = ({ item }) => {
    return (
      <TaskListItem task={item} navigation={this.props.navigation} />
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
          ListEmptyComponent={<EmptyList />}
        />
      </View>
    )
  }
}

export default TaskList;
