import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TaskActions from '../Redux/TaskRedux'
import styles from './Styles/TaskDetailScreenStyle'

class TaskDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('task').name,
    headerStyle: {
      backgroundColor: '#db3c39',
      color: '#FFF'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '200',
    },
  })

  constructor(props) {
    super(props)

    this.state = {
      task: props.navigation.getParam('task'),
      enableComplete: props.navigation.getParam('task').finished,
    }
  }

  deleteTask() {
    const { deleteTask, navigation } = this.props

    deleteTask(this.state.task.id)
    navigation.goBack()
  }

  completeTask() {
    const { finishTask } = this.props
    finishTask(this.state.task.id)
  }

  render() {
    const { task } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldName}>Nome</Text>
          <Text style={styles.fieldValue}>{task.name}</Text>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldName}>Descrição</Text>
          <Text style={styles.fieldValue}>{(task.description === '') ? '--' : task.description }</Text>
        </View>
        <View style={styles.actionsContainers}>
          <View style={styles.btnAction}>
            <Button 
              title="Concluir Tarefa"
              color="#48c75d"
              disabled={this.state.enableComplete}
              onPress={() => { this.completeTask() }}
            />
          </View>
          <View style={styles.btnAction}>
            <Button
              title="Excluir Tarefa"
              color="#db3c39"
              onPress={() => this.deleteTask()}
            />
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (id) => dispatch(TaskActions.deleteTask(id)),
  finishTask: (id) => dispatch(TaskActions.finishTask(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetailScreen)
