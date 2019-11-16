import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import TaskActions from '../Redux/TaskRedux'

class HomeScreen extends Component {

  

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#8aa' }}>
        <Text>Com Redux Agora</Text>
      </View>
    )
  }
}

const mapStateToProps = ({ task }) => ({
  task: task.tasks,
})

const mapDispathToProps = dispatch => ({
  setTask: (task) => dispatch(TaskActions.saveTask(task)),
})

export default connect(mapStateToProps, mapDispathToProps)(HomeScreen);