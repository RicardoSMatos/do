import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Modal, { ModalContent } from 'react-native-modals'

import TaskActions from '../Redux/TaskRedux'
import styles from './Styles/HomeScreenStyles'

import { HeaderButtonAddTask, TaskList } from '../Components'

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Bem vindo',
    headerRight: <HeaderButtonAddTask event={navigation.getParam('addTaskFunc')}/>
  })

  constructor(props) {
    super(props)

    this.addTask = this.addTask.bind(this);

    this.state = {
      modalAddTaskVisible: false,
    }
  } 
  
  addTask() {
    console.log('Adicionar task')
    this.props.setTask({
      id: new Date().getTime(),
      name: 'Tarefa 1',
    })
  }

  componentDidMount() {
    this.props.navigation.setParams({ addTaskFunc: this.addTask })
  }

  render() {
    const { tasks } = this.props

    return (
      <View style={styles.screenContainer}>
        <TaskList 
          tasks={tasks}
        />
      </View>
    )
  }
}

const mapStateToProps = ({ task }) => ({
  tasks: task.tasks,
})

const mapDispathToProps = dispatch => ({
  setTask: (task) => dispatch(TaskActions.saveTask(task)),
})

export default connect(mapStateToProps, mapDispathToProps)(HomeScreen);