import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Animated } from 'react-native'
import PropTypes from 'prop-types'
import { AntDesign } from '@expo/vector-icons'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'


import TaskActions from '../../Redux/TaskRedux'
import styles from './Styles/TaskListItemStyle'

 class TaskListItem extends Component {
  static proopTypes = {
    task: PropTypes.object.isRequired,
    navigate: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      finished: props.task.finished,
    }
  }

  goToDetail() {
    this.props.navigation.navigate('DetailScreen', { task: this.props.task })
  }

  complete() {
    const { completeTask,task } = this.props

    if(!this.state.finished) {
      this.setState({ finished: true })
    }
    completeTask(task.id)
    
  }


  render() {
    const { task } = this.props
    const { finished } = task

    return (
      <Animated.View style={[styles.container, { backgroundColor: !this.state.finished ? '#309ec9' : '#48c75d' }]}>
        {
          !finished ? (
            <View style={styles.checkContainer}>
              <TouchableOpacity onPress={() => this.complete()} style={styles.checkButton}>
                <AntDesign name="checkcircleo" style={styles.checkIcon} />
              </TouchableOpacity>
            </View>
          ) : null
        }
        
        <View style={styles.nameContainer}>
          <Text numberOfLines={2} style={[styles.name, { textDecorationLine: finished ? 'line-through' : 'none' }]}>{task.name}</Text>
        </View>
        <View style={styles.detailContainer}>
          <TouchableOpacity style={styles.detailBtn} onPress={() => this.goToDetail()}>
            <Text style={styles.detailText}>Detalhes</Text>
            <AntDesign name="right" style={styles.detailIcon} />
          </TouchableOpacity>
        </View>
      </Animated.View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  completeTask: (id) => dispatch(TaskActions.finishTask(id))
})

export default connect(null, mapDispatchToProps)(TaskListItem)
